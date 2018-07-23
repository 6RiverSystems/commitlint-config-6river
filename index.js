'use strict';

module.exports = {
	extends: [
		'@commitlint/config-conventional',
	],
	rules: {
		'header-max-length': [2, 'always', 120],
		'subject-case': [
			1,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
	},
};
