# start-ts-templates

A comprehensive collection of production-ready TypeScript project templates for various use cases. Jumpstart your next project with battle-tested configurations, modern tooling, and best practices.

## 🎯 Overview

**start-ts-templates** is a curated monorepo containing 12 specialized TypeScript templates designed to accelerate your development workflow. Each template is production-ready with complete tooling, testing infrastructure, and documentation.

## ✨ Features

- 🚀 **Production Ready** - Battle-tested configurations for immediate use
- ⚡ **Modern Tooling** - esbuild, Rollup, tsdown, and more
- 🧪 **Testing Built-in** - Vitest and Jest pre-configured
- 📦 **Multiple Formats** - ESM, CJS, and optimized builds
- 🎨 **Code Quality** - ESLint, Prettier, Husky, and commitizen
- 📝 **Well Documented** - Comprehensive docs in English and 繁體中文
- 🐳 **Docker Support** - Ready for containerization
- 🌐 **Monorepo Ready** - Turborepo configuration included

## 📦 Available Templates

### Applications

#### 🚀 [app-esbuild](./templates/app-esbuild)
General-purpose TypeScript application template with esbuild for maximum build speed.
- **Use Cases**: CLI tools, backend services, Node.js apps
- **Build Tool**: esbuild
- **Testing**: Vitest

#### 🔥 [app-tsdown](./templates/app-tsdown)
Modern application template using tsdown for optimized builds.
- **Use Cases**: Production applications with minimal bundle size
- **Build Tool**: tsdown
- **Testing**: Vitest

### Backend Frameworks

#### ⚡ [fastify-esbuild](./templates/fastify-esbuild)
High-performance Fastify REST API template with automatic OpenAPI documentation.
- **Framework**: Fastify 5.6+
- **Features**: Swagger UI, validation, plugins
- **Build Tool**: esbuild

#### 🎯 [koa-esbuild](./templates/koa-esbuild)
Lightweight Koa web application with decorator-based routing and IoC.
- **Framework**: Koa 3.0+
- **Features**: routing-controllers, tsyringe DI, Swagger
- **Build Tool**: esbuild

### Libraries

#### 📚 [lib-rollup](./templates/lib-rollup)
Industry-standard library template with Rollup for optimal tree-shaking.
- **Use Cases**: npm packages, shared libraries
- **Output**: ESM + CJS
- **Build Tool**: Rollup

#### 📦 [lib-tsdown](./templates/lib-tsdown)
Modern library template with tsdown for fast, optimized builds.
- **Use Cases**: npm packages with minimal footprint
- **Output**: ESM + CJS
- **Build Tool**: tsdown

#### 🔷 [lib-rolldown](./templates/lib-rolldown)
Next-generation library bundler combining Rollup and esbuild.
- **Use Cases**: High-performance libraries
- **Output**: ESM + CJS
- **Build Tool**: Rolldown

### CLI Tools

#### 🛠️ [bin-tsdown](./templates/bin-tsdown)
Command-line tool template with tsdown, perfect for creating CLI utilities.
- **Use Cases**: CLI tools, scaffolding tools
- **Features**: Commander.js integration
- **Build Tool**: tsdown

### Documentation Sites

#### 📝 [docs-docsify](./templates/docs-docsify)
Zero-build documentation site powered by Docsify.
- **Framework**: Docsify
- **Features**: Client-side rendering, no build required
- **Best For**: Quick documentation sites

#### 📖 [docs-vitepress](./templates/docs-vitepress)
Powerful documentation site with VitePress and Vue 3.
- **Framework**: VitePress 1.6+
- **Features**: SSG, Vue components, local search
- **Best For**: Technical documentation, API docs

### Monorepo

#### 🏗️ [turbo](./templates/turbo)
Full-stack monorepo template with Turborepo and Next.js.
- **Framework**: Turborepo + Next.js
- **Features**: Shared packages, optimized caching
- **Best For**: Large-scale projects, microservices

## 🚀 Quick Start

### Using with start-ts-by CLI (Recommended)

```bash
# Install the CLI globally
npm install -g start-ts-by

# Create a new project from a template
start-ts-by create my-project --template app-esbuild

# Or use npx
npx start-ts-by create my-app --template fastify-esbuild
```

### Manual Clone

```bash
# Clone the repository
git clone https://github.com/royfuwei/start-ts-templates.git

# Navigate to desired template
cd start-ts-templates/templates/app-esbuild

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## 📖 Documentation

Each template includes comprehensive documentation:
- **README.md** - Quick start guide
- **docs/README.md** - Detailed English documentation
- **docs/README.zh-TW.md** - 繁體中文詳細文檔

For complete documentation, see:
- [English Documentation](./docs/README.md)
- [繁體中文文檔](./docs/README.zh-TW.md)

## 🛠️ Template Selection Guide

| Template | Best For | Build Tool | Framework |
|----------|----------|------------|-----------|
| **app-esbuild** | General apps, CLI tools | esbuild | - |
| **app-tsdown** | Optimized applications | tsdown | - |
| **fastify-esbuild** | REST APIs, microservices | esbuild | Fastify |
| **koa-esbuild** | Web apps, APIs | esbuild | Koa |
| **lib-rollup** | npm packages | Rollup | - |
| **lib-tsdown** | Minimal libraries | tsdown | - |
| **lib-rolldown** | High-perf libraries | Rolldown | - |
| **bin-tsdown** | CLI tools | tsdown | - |
| **docs-docsify** | Quick docs | - | Docsify |
| **docs-vitepress** | Technical docs | Vite | VitePress |
| **turbo** | Monorepos | Turborepo | Next.js |

## 🔧 Common Features

All templates include:

- ✅ **TypeScript 5.7+** - Latest TypeScript with strict mode
- 📦 **pnpm** - Fast, efficient package management
- 🧪 **Testing** - Vitest or Jest pre-configured
- 🎨 **Linting** - ESLint with TypeScript support
- 💅 **Formatting** - Prettier with sensible defaults
- �� **Git Hooks** - Husky with lint-staged
- 📝 **Commitizen** - Conventional commits support
- 📊 **Standard Version** - Automated versioning and changelog
- 🐳 **Docker** - Dockerfile included (where applicable)

## 💻 Development

### Repository Structure

```
start-ts-templates/
├── templates/           # All template projects
│   ├── app-esbuild/
│   ├── app-tsdown/
│   ├── fastify-esbuild/
│   ├── koa-esbuild/
│   ├── lib-rollup/
│   ├── lib-tsdown/
│   ├── lib-rolldown/
│   ├── bin-tsdown/
│   ├── docs-docsify/
│   ├── docs-vitepress/
│   └── turbo/
├── packages/            # Shared packages
│   ├── eslint-config/
│   ├── typescript-config/
│   └── ui/
└── docs/               # Repository documentation
```

### Commands

```bash
# Install dependencies
pnpm install

# Run all templates in dev mode
pnpm dev

# Build all templates
pnpm build

# Run tests across all templates
pnpm test

# Lint all templates
pnpm lint

# Conventional commit
pnpm commit
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Run tests: `pnpm test`
5. Commit using commitizen: `pnpm commit`
6. Push to your fork and submit a pull request

### Adding a New Template

1. Create template directory in `templates/`
2. Include all standard files (README, docs, tests)
3. Add to this README's template list
4. Update documentation

## 📄 License

ISC

## 🙏 Acknowledgments

Built with modern tools:
- [esbuild](https://esbuild.github.io/) - Extremely fast bundler
- [Rollup](https://rollupjs.org/) - Module bundler
- [tsdown](https://tsdown.dev/) - TypeScript bundler
- [Turborepo](https://turbo.build/) - High-performance build system
- [Vitest](https://vitest.dev/) - Fast unit testing
- [VitePress](https://vitepress.dev/) - Documentation framework

## 🔗 Links

- [npm Package: start-ts-by](https://www.npmjs.com/package/start-ts-by)
- [GitHub Repository](https://github.com/royfuwei/start-ts-templates)
- [Documentation](./docs/README.md)
- [繁體中文文檔](./docs/README.zh-TW.md)

---

**Created and maintained by** [royfuwei](https://github.com/royfuwei)

For detailed information about each template, explore the [templates directory](./templates) or check out our [comprehensive documentation](./docs/README.md).