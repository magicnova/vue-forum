module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module'
	},
	env: {
		browser: true
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: ['eslint:recommended', 'plugin:vue/recommended'],
	// required to lint *.vue files
	plugins: ['html'],
	// add your custom rules here
	rules: {
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-unused-vars': 1,
		'no-extra-semi': 1,
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'space-before-function-paren': 0,
		'vue/attribute-hyphenation': 0,
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 2,
				closeBracket: 0,
				ignores: []
			}
		],
		'vue/max-attributes-per-line': 0
	}
}
