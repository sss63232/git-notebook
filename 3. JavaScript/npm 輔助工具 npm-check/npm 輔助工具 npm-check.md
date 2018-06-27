# npm 輔助工具 npm-check

npm package 管理的輔助工具，
可以檢查 package 在專案中是否有使用到，
也可以檢查 package 的更新狀況

```shell
npm i -g npm-ckeck
```

## 更新所有 package

檢查 package 的更新狀態

```shell
npm-check -u
```

再用空白鍵+上下鍵選取要更新的 package

## Options

```shell
Usage
  $ npm-check <path> <options>

Path
  Where to check. Defaults to current directory. Use -g for checking global modules.

Options
  -u, --update          Interactive update.
  -y, --update-all      Uninteractive update. Apply all updates without prompting.
  -g, --global          Look at global modules.
  -s, --skip-unused     Skip check for unused packages.
  -p, --production      Skip devDependencies.
  -d, --dev-only        Look at devDependencies only (skip dependencies).
  -i, --ignore          Ignore dependencies based on succeeding glob.
  -E, --save-exact      Save exact version (x.y.z) instead of caret (^x.y.z) in package.json.
  --specials            List of depcheck specials to include in check for unused dependencies.
  --no-color            Force or disable color output.
  --no-emoji            Remove emoji support. No emoji in default in CI environments.
  --debug               Show debug output. Throw in a gist when creating issues on github.

Examples
  $ npm-check           # See what can be updated, what isn't being used.
  $ npm-check ../foo    # Check another path.
  $ npm-check -gu       # Update globally installed modules by picking which ones to upgrade.
```

## References

https://segmentfault.com/a/1190000005857342#articleHeader1

https://www.npmjs.com/package/npm-check