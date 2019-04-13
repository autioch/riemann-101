module.exports = {
  extends: 'qb',
  rules: {
    'no-unused-vars': ['error', { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  }
};
