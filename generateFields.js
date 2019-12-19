const { format } = require('prettier');

const getBaseType = type => (type.ofType ? getBaseType(type.ofType) : type);

const generateFieldsAndValues = (maxDepth, fields) => {
    const valueArray = [];
    const generateFields = (maxDepth, fields, parents = []) =>
        Object.values(fields)
            .map(field => {
                const nextFields = getBaseType(field.type)._fields;
                if (!nextFields) {
                    const value =
                        [...parents, field.name].join('{') +
                        '}'.repeat(parents.length);
                    valueArray.push(`'${value}'`);
                    return `${field.name}: '${value}'`;
                }
                if (parents.length > maxDepth) {
                    return;
                }
                return `${field.name}: {
                    ${generateFields(maxDepth, nextFields, [
                        ...parents,
                        field.name,
                    ])}
                }`;
            })
            .filter(Boolean);

    return [valueArray, generateFields(maxDepth, fields)];
};

module.exports = {
    plugin: (schema, _documents, { maxDepth, baseTypes }) => {
        const typeMap = schema.getTypeMap();
        const final = Object.values(typeMap)
            .filter(type => baseTypes.includes(type.name))
            .map(type => {
                const [values, generatedFields] = generateFieldsAndValues(
                    maxDepth,
                    type._fields,
                );
                return `export type ${type.name}Fields = {
                    ${generatedFields}
                };
                export const ${type.name}Fields: ${type.name}Fields = {
                    ${generatedFields}
                };
                export type ${type.name}Field = ${values.join('|')};
                `;
            })
            .join('');

        return format(final, {
            parser: 'typescript',
            trailingComma: 'all',
            tabWidth: 4,
            singleQuote: true,
        });
    },
};
