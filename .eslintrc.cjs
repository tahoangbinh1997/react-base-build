module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['plugin:react/recommended', 'airbnb-typescript', 'prettier'],
	plugins: ['react', '@typescript-eslint', 'import'],
	ignorePatterns: ['*.cjs', '*.test.tsx'],
	parserOptions: {
		ecmaFeatures: {
			tsx: true
		},
		sourceType: 'module',
		ecmaVersion: 12,
		project: ['./tsconfig.eslint.json'],
		warnOnUnsupportedTypeScriptVersion: false
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],

			rules: {
				'jest/valid-expect': 0
			}
		}
	],
	env: {
		browser: true,
		es2021: true
	},
	settings: {
		version: 'detect'
	},
	rules: {
		'@typescript-eslint/no-explicit-any': ['off'],
		'no-unused-vars': 'off',
		'no-console': 2,
    "semi": [2, "never"],
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/ban-types': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never'
			}
		],
		'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/object-curly-spacing': 'off',
		'@typescript-eslint/space-before-blocks': 'off'
	},
	globals: {
		google: 'readonly'
	}
}
