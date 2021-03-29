module.exports = {
    extends: ['airbnb-typescript', 'prettier'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': ['error', {
            allowExpressions: true,
        }],
        'no-param-reassign': ['off'],
        'no-plusplus': ['off'],
        'spaced-comment': ['off'],
    },
};
