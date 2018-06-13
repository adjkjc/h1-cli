'use strict'

module.exports = {
    'parserOptions': {
        'ecmaVersion': 2017
      , 'sourceType': 'script'
    }
  , 'env': {
        'node': true
      , 'es6': true
    }
  , 'rules': {
        'quote-props': [ 'error', 'as-needed' ]
      , 'semi': [ 'error', 'always' ]
      , 'strict': [ 'error', 'global' ]
      , 'comma-dangle': [ 'error', 'never' ]
      , 'no-cond-assign': [ 'error', 'always' ]
      , 'no-constant-condition': 'error'
      , 'no-unused-vars': 'error'
      , 'no-unused-expressions': 'error'
      , 'no-dupe-keys': 'error'
      , 'no-undef': 'error'
      , 'no-duplicate-case': 'error'
      , 'prefer-template': 'warn'
      , 'no-var': 'warn'
      , 'prefer-const': 'warn'
      , 'valid-typeof': 'error'
      , 'dot-notation': 'error'
      , 'eol-last': 'error'
      , 'no-trailing-spaces': 'warn'
      , 'quotes': [ 'error', 'single', { 'avoidEscape': true } ]
      , 'no-tabs': 'error'
      , 'space-before-blocks': 'error'
      , 'keyword-spacing': 'error'
      , 'no-lonely-if': 'error'
      , 'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ]
      , 'no-else-return': 'error'
      , 'func-call-spacing': 'error'
      , 'callback-return': 'error'
      , 'no-extra-parens': 'error'
      , 'new-parens': 'error'
      , 'space-in-parens': 'error'
      , 'comma-spacing': 'error'
    }
}
