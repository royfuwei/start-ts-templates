docs-docsify
===


## Gitlab Pages

### 1. Init docsify `./docs`
```sh
npx docsify-cli init ./docs

# ❯ npx docsify-cli init ./docs
# (node:11264) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
# (Use `node --trace-deprecation ...` to show where the warning was created)
#
# Initialization succeeded! Please run docsify serve ./docs

```

run docsify serve

```sh
npx docsify-cli serve docs
```

#### Update relativePath settings

```html
  <script>
    window.$docsify = {
      name: '',
      repo: '',
      relativePath: true,
    }
  </script>
```

---

This project is a `royfuwei/starter-ts-app` template for creating a new project using the [start-ts-by](https://www.npmjs.com/package/start-ts-by) CLI.

## Getting Started

```bash
# 1. Install dependencies
npm install
## or pnpm
pnpm install
# 2. Run the project
npm run dev
# 3. Build the project
npm run build
# 4. Run tests
npm run test
# 5. Run lint
npm run lint
```

## Release
```bash
# 1. Release the project
npx standard-version
## or
npm run release
# dry run
npm run release -- --dry-run

# 2. Release the project with version
npm run release -- --version 1.0.0
```

## Reference
- [Original README](./START_BY_README.md)
  