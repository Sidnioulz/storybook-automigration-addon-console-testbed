# Test suite for the addon-console automigration

# WORKS
git checkout examples/arrow-fn-export
node ~/Development/storybook/code/lib/cli-storybook/bin/index.cjs automigrate migrate-addon-console
git diff
git checkout .

# WORKS
git checkout examples/fn-decl-export
node ~/Development/storybook/code/lib/cli-storybook/bin/index.cjs automigrate migrate-addon-console
git diff
git checkout .

# WORKS
git checkout examples/default-export
node ~/Development/storybook/code/lib/cli-storybook/bin/index.cjs automigrate migrate-addon-console
git diff
git checkout .

# WORKS
git checkout examples/default-export-with-fn-ref
node ~/Development/storybook/code/lib/cli-storybook/bin/index.cjs automigrate migrate-addon-console
git diff
git checkout .
