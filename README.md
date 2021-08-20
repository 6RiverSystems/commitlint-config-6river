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

If you already have a pre-commit hook in `.husky/commit-msg`, add this line to it:
```shell
npx commitlint --edit $1
```

If you do not have the file `.husky/commit-msg`, run the following to create it:
```shell
npx husky add .husky/commit-msg "npx commitlint --edit $1"
git add .husky/commit-msg
```

For more information, see [the `commitlint` documentation](https://commitlint.js.org/).
