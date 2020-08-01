module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript featu$
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
            tsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically de$
        },
    },
    extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-$
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules $
        'prettier/@typescript-eslint', // Uses eslint-config-prettier to disabl$
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and es$
    ],
    plugins: ['react-hooks'],
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specif$
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
};
