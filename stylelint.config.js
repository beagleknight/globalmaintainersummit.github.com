module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-scss', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
}
