# TypeScript Templates 文檔撰寫計劃

## 專案概覽

本文檔集合包含 12 個 TypeScript 專案模板,涵蓋應用程式、CLI 工具、函式庫、文檔網站和 Monorepo 等不同類型。

## 專案分類與核心資訊

### 📦 應用程式模板 (Application Templates)

#### 1. app-esbuild
- **用途**: 使用 esbuild 構建的 TypeScript 應用程式模板
- **構建工具**: esbuild v0.25.2
- **測試框架**: Vitest v3.2.3
- **主要特性**:
  - 極速構建 (esbuild)
  - 完整的開發工作流 (dev/build/test)
  - 支援多種構建方式 (esbuild/tsx/tsc)
  - 熱重載開發模式
  - VitePress 文檔支援
  - TypeScript 嚴格模式
  - ESLint + Prettier 程式碼品質控制
  - Husky + Lint-staged Git hooks
  - Vitest 單元測試和 E2E 測試
  - Source maps 支援
  - Docker 部署支援
- **適用場景**: 需要快速構建的 Node.js 應用程式、CLI 工具、後端服務

#### 2. app-tsdown
- **用途**: 使用 tsdown 構建的 TypeScript 應用程式模板
- **構建工具**: tsdown v0.17.3 (基於 Rolldown)
- **測試框架**: Vitest v3.2.3
- **主要特性**:
  - 新一代構建工具 tsdown
  - watch 模式開發
  - 完整的測試覆蓋
  - VitePress 文檔支援
  - 程式碼品質控制
- **適用場景**: 追求新技術的 Node.js 應用程式

### 🔧 CLI 工具模板 (Binary/CLI Templates)

#### 3. bin-tsdown
- **用途**: 使用 tsdown 構建的 CLI 工具模板
- **構建工具**: tsdown v0.17.3
- **測試框架**: Vitest v3.2.3
- **主要特性**:
  - CLI 工具開發專用
  - commander.js 命令列框架
  - inquirer 互動式提示
  - degit 專案腳手架功能
  - 型別定義生成 (dts-bundle-generator)
  - 獨立可執行檔案輸出
  - package.json 複製插件
  - 檔案複製功能
- **適用場景**: 開發命令列工具、腳手架、自動化工具

### 📚 文檔網站模板 (Documentation Templates)

#### 4. docs-docsify
- **用途**: 使用 Docsify 的文檔網站模板
- **構建工具**: esbuild v0.25.2 / Rollup v4.36.0
- **測試框架**: Jest v29.7.0
- **主要特性**:
  - Docsify 靜態文檔生成
  - 支援多種構建方式 (esbuild/rollup/tsc)
  - Jest 測試框架
  - HTML 測試報告
  - 完整的版本管理 (standard-version)
- **適用場景**: 專案文檔網站、API 文檔、技術部落格

#### 5. docs-vitepress
- **用途**: 使用 VitePress 的文檔網站模板
- **構建工具**: esbuild v0.25.2 / Rollup v4.36.0
- **文檔工具**: VitePress v1.6.3
- **測試框架**: Vitest v3.2.3 / Jest v29.7.0
- **主要特性**:
  - VitePress 強大的文檔功能
  - 支援多種構建工具
  - 雙測試框架 (Vitest + Jest)
  - GitLab CI/CD 配置
  - 完整的開發工作流
- **適用場景**: 現代化文檔網站、開源專案文檔

### 🚀 後端框架模板 (Backend Framework Templates)

#### 6. fastify-esbuild
- **用途**: 使用 Fastify + esbuild 的後端應用模板
- **後端框架**: Fastify v5.6.2
- **構建工具**: esbuild v0.25.2
- **測試框架**: Vitest v3.2.3
- **主要特性**:
  - Fastify 高效能後端框架
  - Swagger/OpenAPI 文檔自動生成
  - CORS、multipart、formbody 支援
  - Pino 日誌系統
  - 模組化路由設計
  - Docker 部署支援
  - 完整的 API 開發工具鏈
- **適用場景**: RESTful API、微服務、高效能後端應用

#### 7. koa-esbuild
- **用途**: 使用 Koa + esbuild 的後端應用模板
- **後端框架**: Koa v3.0.0
- **構建工具**: esbuild v0.25.2
- **測試框架**: Vitest v3.2.3
- **主要特性**:
  - Koa 靈活的中介軟體框架
  - routing-controllers 裝飾器路由
  - class-validator 請求驗證
  - OpenAPI 規格支援
  - Swagger UI
  - tsyringe 依賴注入
  - Winston 日誌系統
  - 完整的 IoC 容器設計
- **適用場景**: 企業級後端應用、需要依賴注入的專案

### 📚 函式庫模板 (Library Templates)

#### 8. lib-esbuild
- **用途**: 使用 esbuild 的函式庫模板
- **構建工具**: esbuild v0.25.1
- **測試框架**: Vitest v3.2.3
- **主要特性**:
  - 雙格式輸出 (CJS + ESM)
  - 型別定義生成 (dts-bundle-generator)
  - Tree-shaking 支援
  - 極速構建
  - Watch 模式開發
  - 完整的測試覆蓋
- **適用場景**: npm 套件開發、工具函式庫、UI 元件庫

#### 9. lib-rolldown
- **用途**: 使用 Rolldown 的函式庫模板
- **構建工具**: Rolldown v1.0.0-beta.53
- **測試框架**: Vitest v3.2.3
- **主要特性**:
  - 新一代構建工具 Rolldown (Rust 驅動)
  - 雙格式輸出 (CJS + ESM)
  - rollup-plugin-dts 型別定義
  - rollup-plugin-copy 檔案複製
  - 高效能構建
- **適用場景**: 追求極致效能的函式庫專案

#### 10. lib-rollup
- **用途**: 使用 Rollup 的函式庫模板
- **構建工具**: Rollup v4.36.0
- **測試框架**: Vitest v3.2.3
- **主要特性**:
  - 成熟穩定的 Rollup 構建
  - 雙格式輸出 (CJS + ESM)
  - Tree-shaking 優化
  - 多種插件支援
  - 型別定義生成
- **適用場景**: 生產級函式庫、需要穩定構建工具的專案

#### 11. lib-tsdown
- **用途**: 使用 tsdown 的函式庫模板
- **構建工具**: tsdown v0.17.0-beta.6
- **測試框架**: Vitest v3.2.3
- **主要特性**:
  - 現代化構建工具 tsdown
  - 雙格式輸出 (CJS + ESM)
  - 簡化的配置
  - Watch 模式開發
  - 完整的測試支援
- **適用場景**: 追求新技術的函式庫專案

### 🏗️ Monorepo 模板 (Monorepo Templates)

#### 12. turbo
- **用途**: Turborepo monorepo 模板
- **構建工具**: Turbo v2.6.1
- **主要特性**:
  - Turborepo 任務編排
  - pnpm workspace 管理
  - 共享配置套件 (eslint-config, typescript-config)
  - UI 元件庫套件
  - Next.js 示範應用
  - Turbo generators 程式碼生成
  - 並行任務執行
  - 智慧快取機制
- **適用場景**: 大型專案、微前端、多套件專案

## 通用技術棧

所有模板共同使用的技術:

### 開發工具
- **TypeScript**: v5.7.3 (嚴格模式)
- **pnpm**: v10.24.0 (套件管理)
- **Node.js**: >=18

### 程式碼品質
- **ESLint**: v9.20.1 (typescript-eslint v8.24.0)
- **Prettier**: v3.5.1
- **Husky**: v9.1.7 (Git hooks)
- **Lint-staged**: v15.4.3

### 版本控制與發布
- **Commitizen**: v4.3.1 (cz-conventional-changelog)
- **Commitlint**: v19.7.1 (conventional commits)
- **Standard-version**: 自動版本管理和 CHANGELOG

## 文檔撰寫策略

### 文檔結構

每個專案將包含 3 份文檔:

1. **README.md** (根目錄)
   - 長度: 約 120-180 行
   - 內容: 簡潔介紹、快速開始、主要指令
   - 目標: 讓開發者在 2 分鐘內了解專案並開始使用

2. **docs/README.md** (英文詳細文檔)
   - 長度: 約 350-500 行
   - 內容: 完整技術文檔、配置說明、最佳實踐
   - 目標: 提供深入的技術參考

3. **docs/README.zh-TW.md** (繁體中文詳細文檔)
   - 長度: 與英文版對應
   - 內容: 完全翻譯的技術文檔
   - 目標: 服務繁體中文使用者

### 根目錄 README.md 結構

```markdown
# {專案名稱}

[專案徽章]

## 📖 簡介
2-3 句話說明專案用途

## ✨ 特性
- 5-8 個核心特性

## 🛠️ 技術棧
主要技術列表

## 🚀 快速開始

### 前置需求
### 安裝
### 開發
### 構建
### 測試

## 📜 可用指令
主要 npm scripts

## 📚 詳細文檔
連結到 docs/

## 🤝 貢獻
簡短貢獻指南

## 📄 授權
ISC
```

### docs/ 詳細文檔結構

```markdown
# {專案名稱} - Complete Documentation

## 📑 Table of Contents

## 🎯 Project Overview
詳細介紹、適用場景、設計理念

## ✨ Core Features
每個特性的詳細說明

## 🏗️ Architecture
- 技術架構圖
- 專案結構
- 模組設計

## 🛠️ Development Guide
### Environment Setup
### Development Workflow
### Code Standards
### Git Workflow

## 📜 Available Scripts
詳細的指令說明

## ⚙️ Configuration
- TypeScript Configuration
- Build Tool Configuration
- Testing Configuration
- Linting Configuration

## 🧪 Testing
測試策略和實踐

## 🚀 Build & Deployment
生產構建和部署指南

## 💡 Best Practices
開發建議和模式

## 🐛 Troubleshooting
常見問題

## 🤝 Contributing
詳細貢獻指南

## 📄 License
```

## 下一步行動

1. ✅ 分析完成 - 12 個專案的核心資訊已整理
2. 🔄 進行中 - 準備 app-esbuild 範例文檔
3. 🔄 進行中 - 準備 lib-esbuild 範例文檔
4. ⏳ 等待審查 - 使用者確認文檔風格
5. ⏳ 待執行 - 撰寫剩餘 10 個專案文檔
6. ⏳ 待執行 - 最終驗證

## 預估工作量

- **總文檔數**: 36 份 (12 專案 × 3 文檔)
- **預估總行數**: ~18,000 行
  - 根目錄 README: ~1,800 行 (12 × 150)
  - 英文詳細文檔: ~4,800 行 (12 × 400)
  - 繁體中文詳細文檔: ~4,800 行 (12 × 400)
- **預估時間**: 依實際撰寫速度調整

## 品質標準

每份文檔必須:
- ✅ 準確反映專案實際配置
- ✅ 程式碼範例可執行
- ✅ 連結有效
- ✅ 格式一致
- ✅ 技術術語正確
- ✅ 中英文用詞專業