const fs = require("fs");
const path = require("path");

// Read registry.json
const registryContent = fs.readFileSync("./registry.json", "utf8");
const registry = JSON.parse(registryContent);

console.log("=== Registry.json 驗證報告 ===\n");

// 1. JSON 格式檢查
console.log("1. JSON 格式正確性:");
console.log("   ✓ JSON 語法有效");
const indentCheck = registryContent.split("\n")[1].match(/^(\s+)/);
const indentSize = indentCheck ? indentCheck[1].length : 0;
console.log(
  `   ${indentSize === 2 ? "✓" : "⚠"} 縮排格式: ${indentSize} 空格 ${indentSize === 2 ? "(符合規範)" : "(建議使用 2 空格)"}`
);

// 2. 必要欄位檢查
console.log("\n2. 必要欄位存在性:");
const hasRepo = registry.hasOwnProperty("repo");
const hasDefaultRef = registry.hasOwnProperty("defaultRef");
const hasTemplates = registry.hasOwnProperty("templates");
console.log(`   ${hasRepo ? "✓" : "✗"} repo 欄位存在`);
console.log(`   ${hasDefaultRef ? "✓" : "✗"} defaultRef 欄位存在`);
console.log(`   ${hasTemplates ? "✓" : "✗"} templates 欄位存在`);

// 3. 欄位格式驗證
console.log("\n3. 欄位格式驗證:");
const repoFormat = /^[a-zA-Z0-9_-]+\/[a-zA-Z0-9_.-]+$/;
const repoValid =
  typeof registry.repo === "string" && repoFormat.test(registry.repo);
console.log(
  `   ${repoValid ? "✓" : "✗"} repo 格式 (owner/repo): "${registry.repo}"`
);
console.log(
  `   ${typeof registry.defaultRef === "string" && registry.defaultRef ? "✓" : "✗"} defaultRef 格式: "${registry.defaultRef}"`
);
console.log(
  `   ${Array.isArray(registry.templates) ? "✓" : "✗"} templates 為陣列型態`
);

// 4. 模板定義完整性
console.log("\n4. 模板定義完整性:");
const kebabCasePattern = /^[a-z0-9]+(-[a-z0-9]+)*$/;
let allValid = true;
const ids = new Set();
const duplicateIds = [];

registry.templates.forEach((template, index) => {
  const hasId = template.hasOwnProperty("id");
  const hasPath = template.hasOwnProperty("path");
  const hasTitle = template.hasOwnProperty("title");

  if (!hasId || !hasPath || !hasTitle) {
    console.log(`   ✗ 模板 #${index + 1} 缺少必要欄位`);
    allValid = false;
  }

  if (hasId) {
    if (ids.has(template.id)) {
      duplicateIds.push(template.id);
    }
    ids.add(template.id);

    if (!kebabCasePattern.test(template.id)) {
      console.log(`   ⚠ 模板 ID "${template.id}" 不符合 kebab-case 格式`);
    }
  }
});

if (allValid && duplicateIds.length === 0) {
  console.log(
    `   ✓ 所有 ${registry.templates.length} 個模板定義包含必要欄位 (id, path, title)`
  );
}

// 5. ID 唯一性檢查
console.log("\n5. 模板 ID 唯一性:");
if (duplicateIds.length > 0) {
  console.log(`   ✗ 發現重複的 ID: ${duplicateIds.join(", ")}`);
} else {
  console.log(`   ✓ 所有 ${ids.size} 個模板 ID 皆唯一`);
}

// 6. 路徑存在性檢查
console.log("\n6. 模板路徑存在性:");
let pathErrors = [];
registry.templates.forEach((template) => {
  const templatePath = path.join(process.cwd(), template.path);
  if (!fs.existsSync(templatePath)) {
    pathErrors.push(template.path);
  }
});

if (pathErrors.length > 0) {
  console.log("   ✗ 以下路徑不存在:");
  pathErrors.forEach((p) => console.log(`     - ${p}`));
} else {
  console.log(`   ✓ 所有 ${registry.templates.length} 個模板路徑皆存在`);
}

// 7. 模板列表
console.log(`\n7. 註冊的模板列表 (共 ${registry.templates.length} 個):`);
registry.templates.forEach((template, index) => {
  const exists = fs.existsSync(path.join(process.cwd(), template.path));
  console.log(
    `   ${index + 1}. ${exists ? "✓" : "✗"} [${template.id}] ${template.title}`
  );
  console.log(`      路徑: ${template.path}`);
});

// 總結
console.log("\n=== 驗證總結 ===");
const criticalIssues = [];
const warnings = [];

if (!hasRepo || !hasDefaultRef || !hasTemplates)
  criticalIssues.push("缺少必要欄位");
if (!repoValid) criticalIssues.push("repo 格式不正確");
if (!Array.isArray(registry.templates))
  criticalIssues.push("templates 不是陣列");
if (duplicateIds.length > 0) criticalIssues.push("存在重複的模板 ID");
if (pathErrors.length > 0)
  criticalIssues.push(`${pathErrors.length} 個模板路徑不存在`);
if (indentSize !== 2) warnings.push("建議使用 2 空格縮排");

if (criticalIssues.length === 0 && warnings.length === 0) {
  console.log("✓ 驗證通過! registry.json 完全符合規格要求");
  process.exit(0);
} else {
  if (criticalIssues.length > 0) {
    console.log("✗ 發現嚴重問題:");
    criticalIssues.forEach((issue) => console.log(`  - ${issue}`));
  }
  if (warnings.length > 0) {
    console.log("⚠ 警告:");
    warnings.forEach((warning) => console.log(`  - ${warning}`));
  }
  process.exit(criticalIssues.length > 0 ? 1 : 0);
}
