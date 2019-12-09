const { format } = require('prettier');

const getBaseType = type => (type.ofType ? getBaseType(type.ofType) : type);

const nameMap = {};

const getName = name => {
    const mappedName =
        Object.keys(nameMap).find(key => nameMap[key] === name) ||
        Object.keys(nameMap).length;
    nameMap[mappedName] = name;
    return mappedName;
};

const generateFields = ({ type, maxDepth }, fields, parents = []) =>
    Object.values(fields)
        .map(field => {
            const nextFields = getBaseType(field.type)._fields;
            if (!nextFields) {
                const value = [...parents, field.name]
                    .map(name => getName(name))
                    .join('%');
                return `${field.name}: ${type ? 'string' : `'${value}'`}`;
            }
            if (parents.length > maxDepth) {
                return;
            }
            return `${field.name}: {
                ${generateFields({ type, maxDepth }, nextFields, [
                    ...parents,
                    field.name,
                ])}
            }`;
        })
        .filter(Boolean);

module.exports = {
    plugin: (schema, _documents, { maxDepth, baseTypes }) => {
        const typeMap = schema.getTypeMap();
        let final = Object.values(typeMap)
            .filter(type => baseTypes.includes(type.name))
            .map(
                type => `export type ${type.name}Fields = {
                    ${generateFields({ type: true, maxDepth }, type._fields)}
                };
                export const ${type.name}Fields: ${type.name}Fields = {
                    ${generateFields({ type: false, maxDepth }, type._fields)}
                };`,
            )
            .join('');

        final += `export const nameMap = ${JSON.stringify(nameMap)}`;

        return format(final, {
            parser: 'typescript',
            trailingComma: 'all',
            tabWidth: 4,
            singleQuote: true,
        });
    },
};
