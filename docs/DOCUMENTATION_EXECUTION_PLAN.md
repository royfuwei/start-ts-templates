# 文檔撰寫執行計劃

## 📊 專案總覽

**總計:** 12 個專案 × 3 份文檔 = **36 份文檔**

## 🎯 撰寫策略

### 文檔類型
1. **README.md** (根目錄) - 英文簡潔版 (~150-200 行)
2. **docs/README.md** - 英文詳細版 (~400-600 行)
3. **docs/README.zh-TW.md** - 繁體中文詳細版 (~400-600 行)

### 撰寫順序

按專案類型分組,確保相似專案文檔風格一致:

#### 第一組: 應用程式模板 (6 份文檔)
1. ✅ **app-esbuild** (範例已完成)
2. ⏳ **app-tsdown** 

#### 第二組: CLI 工具模板 (3 份文檔)
3. ⏳ **bin-tsdown**

#### 第三組: 文檔網站模板 (6 份文檔)
4. ⏳ **docs-docsify**
5. ⏳ **docs-vitepress**

#### 第四組: 後端框架模板 (6 份文檔)
6. ⏳ **fastify-esbuild**
7. ⏳ **koa-esbuild**

#### 第五組: 函式庫模板 (12 份文檔)
8. ⏳ **lib-esbuild** (範例部分完成)
9. ⏳ **lib-rolldown**
10. ⏳ **lib-rollup**
11. ⏳ **lib-tsdown**

#### 第六組: Monorepo 模板 (3 份文檔)
12. ⏳ **turbo**

## 📝 檔案路徑規劃

每個專案的文檔將寫入以下位置:

```
templates/{project-name}/
├── README.md                 # 英文根目錄 README
└── docs/
    ├── README.md            # 英文詳細文檔
    └── README.zh-TW.md      # 繁體中文詳細文檔
```

## ✅ 品質標準

每份文檔必須:
- [ ] 基於實際的 package.json 配置
- [ ] 包含正確的版本號和依賴
- [ ] 程式碼範例可執行
- [ ] 檔案路徑正確
- [ ] Markdown 格式正確
- [ ] 中英文用詞專業

## 🚀 執行狀態

### 已完成 (4/36)
- [x] app-esbuild/README.md (範例)
- [x] app-esbuild/docs/README.md (範例)
- [x] app-esbuild/docs/README.zh-TW.md (範例)
- [x] lib-esbuild/README.md (範例)

### 待完成 (32/36)
- [ ] app-tsdown × 3
- [ ] bin-tsdown × 3
- [ ] docs-docsify × 3
- [ ] docs-vitepress × 3
- [ ] fastify-esbuild × 3
- [ ] koa-esbuild × 3
- [ ] lib-esbuild × 2 (剩餘詳細文檔)
- [ ] lib-rolldown × 3
- [ ] lib-rollup × 3
- [ ] lib-tsdown × 3
- [ ] turbo × 3

## 📅 執行時間表

**開始時間:** 2025-12-15  
**預計完成:** 依實際撰寫速度

---

**狀態:** 🚧 進行中  
**最後更新:** 2025-12-15 16:23 (UTC+8)