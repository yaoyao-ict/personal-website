# 个人网站

这是一个静态个人网站项目。它可以直接放到 GitHub，然后通过 Azure Static Web Apps 自动发布。

## 当前工作流

你之后可以在手机上继续给 Codex 布置任务。代码仍然保存在这个项目目录里，Codex 修改文件后，只要这些改动被提交并推送到 GitHub，Azure Static Web Apps 就会自动重新部署。

推荐流程：

1. 你在手机上说要改什么。
2. Codex 修改本地项目文件。
3. Codex 或你把改动 commit / push 到 GitHub。
4. Azure 自动部署。
5. 你在手机浏览器打开 Azure 站点 URL 查看效果。

## 项目文件

- `index.html`：页面内容
- `styles.css`：视觉样式
- `script.js`：菜单、搜索框、主题切换等小交互
- `assets/hero-avatar.png`：首页插画
- `staticwebapp.config.json`：Azure Static Web Apps 配置
- `.github/workflows/azure-static-web-apps.yml`：GitHub Actions 部署模板

## 需要替换的内容

- `你的名字`
- `you@example.com`
- `https://github.com/your-username`
- LinkedIn 链接
- 项目、文章、技能标签的占位内容
- `assets/hero-avatar.png`，如果你想换成自己的头像或插画

## 本地预览

这个网站是纯静态页面，直接打开 `index.html` 就能看。

如果本机有 Node，也可以运行一个本地服务器：

```powershell
npx serve .
```

## 推送到 GitHub

当前环境里没有检测到 `git`、`gh` 或 `az` 命令。你可以先在电脑上安装 Git，之后在这个目录执行：

```powershell
git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

建议把 GitHub 仓库名设为类似：

```text
personal-website
```

## 连接 Azure Static Web Apps

最简单的方式是在 Azure Portal 里创建：

1. 创建 `Static Web App`。
2. 选择你的 GitHub 仓库。
3. 分支选择 `main`。
4. Build Presets 选择 `Custom`。
5. App location 填 `/`。
6. Api location 留空。
7. Output location 留空。

Azure 创建完成后，会给你一个公开 URL。之后每次 push 到 `main`，这个 URL 都会自动更新。

## 如果使用本项目自带的 GitHub Actions 模板

如果 Azure 没有自动生成 workflow，可以使用本项目里的：

```text
.github/workflows/azure-static-web-apps.yml
```

你需要在 GitHub 仓库的 `Settings -> Secrets and variables -> Actions` 里添加 secret：

```text
AZURE_STATIC_WEB_APPS_API_TOKEN
```

这个 token 可以在 Azure Static Web Apps 资源的部署设置里获取。添加后，每次 push 到 `main` 都会触发部署。

## 手机上实时查看效果

严格来说，它不是“边打字边实时刷新”，而是“每次推送后自动更新线上页面”。通常静态站部署会在几十秒到几分钟内完成。

更适合你的手机工作流：

- 日常小改动：让 Codex 改完后 push 到 `main`，你直接刷新 Azure URL。
- 比较大的改动：开一个 GitHub Pull Request，Azure 会生成 preview 环境，确认没问题后再合并到 main。
