module.exports = {
    'extends': 'eslint:recommended',
    'parser': 'babel-eslint',
    'env': {
        'browser': false,
        'node': true,
        'commonjs': true,
        'es6': true,
        'mocha': true
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'script'
    },
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'rules': {
        'no-console': ['error', {
            'allow': ['warn', 'error', 'info']
        }]
    }
};
