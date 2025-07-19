# Test suite for the addon-console automigration

## Missing beforeEach
```sh
git checkout examples/no-beforeeach
node ~/Development/storybook/code/lib/cli-storybook/bin/index.cjs automigrate migrate-addon-console
git diff
git checkout .
```

## Missing beforeEach (with direct default export object)
```sh
git checkout examples/default-export-no-beforeeach
node ~/Development/storybook/code/lib/cli-storybook/bin/index.cjs automigrate migrate-addon-console
git diff
git checkout .
```

## Function declaration named export
```sh
git checkout examples/fn-decl-export
node ~/Development/storybook/code/lib/cli-storybook/bin/index.cjs automigrate migrate-addon-console
git diff
git checkout .
```

## Default export property
```sh
git checkout examples/default-export
node ~/Development/storybook/code/lib/cli-storybook/bin/index.cjs automigrate migrate-addon-console
git diff
git checkout .
```

## Default export property referencing a local function declaration
```sh
git checkout examples/default-export-with-fn-ref
node ~/Development/storybook/code/lib/cli-storybook/bin/index.cjs automigrate migrate-addon-console
git diff
git checkout .
```
