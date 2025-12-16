# 實作任務清單

## 1. 建立 Registry 檔案

- [ ] 1.1 在專案根目錄建立 [`registry.json`](../../registry.json:1) 檔案
- [ ] 1.2 定義 JSON Schema 結構(repo, defaultRef, templates)
- [ ] 1.3 加入初始模板資訊(app-tsdown, lib-tsdown)

## 2. 驗證與測試

- [ ] 2.1 驗證 JSON 格式正確性
- [ ] 2.2 確認所有模板路徑存在且可存取
- [ ] 2.3 測試與 start-ts-by 工具的整合(如果可行)

## 3. 文件更新

- [ ] 3.1 更新專案 README,說明 registry.json 的用途
- [ ] 3.2 提供新增模板到 registry 的指引
- [ ] 3.3 說明 registry.json 的欄位定義

## 4. 後續維護規劃

- [ ] 4.1 建立模板新增/移除時的更新流程
- [ ] 4.2 考慮建立自動化腳本來驗證 registry.json 與實際模板的同步性