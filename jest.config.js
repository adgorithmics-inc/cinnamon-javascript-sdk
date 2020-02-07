module.exports = {
    reporters: ['default', 'jest-junit'],
    testMatch: ['**/tests/**/*'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
};
