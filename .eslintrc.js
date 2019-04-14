module.exports = {
  extends: 'qb',
  rules: {
    'no-unused-vars': ['error', { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    'id-length': ['off'],
    'no-multi-assign': ['off'],
    'max-params': ['off'],
    'line-comment-position': ['off'],
    'no-inline-comments': ['off'],
  }
};
