# `@6river/commitlint-config-6river`

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=6RiverSystems/commitlint-config-6river)](https://dependabot.com)

6 River Systems `commitlint` configuration.

`commitlint` is a tool that checks commit messages for conformance to the [conventional commits](https://conventionalcommits.org/) specification. Standardized commit messages are useful for automation of versioning and changelogs.

## Installation

The following instructions use [Husky](https://github.com/typicode/husky/) for commit hooks.

```shell
npm install --save-dev @commitlint/cli husky @6river/commitlint-config-6river
```

The simplest way to configure `commitlint` is in `package.json`:
```json
"commitlint": {
	"extends": [
		"@6river/commitlint-config-6river"
	]
}
```

You can also use a standalone file `commitlint.config.js`:
```js
module.exports = {extends: ['@6river/commitlint-config-6river']}
```

The commit hook must be configured in `package.json`, merging with any existing `husky` configuration:
```json
"husky": {
	"hooks": {
		"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
	}
}
```

For more information, see [the `commitlint` documentation](https://commitlint.js.org/).
