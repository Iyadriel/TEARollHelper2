module.exports = {
    extends: ['airbnb-typescript'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/explicit-function-return-type': ['error', {
            allowExpressions: true,
        }],
        'no-param-reassign': ['off'],
        'no-plusplus': ['off'],
        'spaced-comment': ['off'],
    },
};
