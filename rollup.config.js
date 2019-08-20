import typescript from 'rollup-plugin-typescript2';
import keysTransformer from 'ts-transformer-keys/transformer';

export default {
    input: './src/index.ts',
    output: {
        file: 'index.js',
        format: 'cjs',
    },
    plugins: [
        typescript({
            transformers: [
                service => ({
                    before: [keysTransformer(service.getProgram())],
                    after: [],
                }),
            ],
        }),
    ],
};
