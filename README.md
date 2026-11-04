# TSAI · 个人主页

**线上地址：<https://mabaca123hsu.github.io/>** · 仓库：<https://github.com/mabaca123hsu/mabaca123hsu.github.io>

由 GitHub Pages 从 `main` 分支根目录自动发布（每次 push 后约 30 秒重建）。

一个**零依赖、零构建**的个人入口站：手写 HTML / CSS / JS，深浅双主题，托管在 GitHub Pages 上。

站名 **TSAI**，主视觉用 TSAI 标志，三个平台入口贯穿全站：

| 平台 | 链接 |
| --- | --- |
| Telegram 群组（主阵地） | https://t.me/+5ZhT1T57wfEyMTcx |
| X | https://x.com/tsai1224?s=11 |
| 哔哩哔哩 | https://b23.tv/YUPe5hf |

---

## 页面

```
pages-guide/
├── index.html        首页：标志主视觉、三个平台入口、关于、CTA
├── links.html        链接聚合页（可填到任何 bio）：一键复制每条链接
├── about.html        关于 + 联系方式 + FAQ
├── deploy.html       本站部署笔记：GitHub Pages 发布源两种配置方式
├── 404.html          自包含 404 页（样式内联、自动探测站点根）
├── assets/
│   ├── css/style.css 全部样式（深浅主题、响应式、打印）
│   ├── js/main.js    主题切换、移动导航、滚动出现、复制链接
│   └── img/
│       ├── tsai-logo.png        原始标志（1254×1254）
│       ├── tsai-logo-ink.png    深色字迹 + 透明底（浅色主题用）
│       ├── tsai-logo-paper.png  白色字迹 + 透明底（深色主题用）
│       ├── favicon.png          渐变圆角方块 + 白字，512×512
│       ├── apple-touch-icon.png 180×180
│       ├── og-cover.png         分享图 1200×630
│       └── prepare_logo.py      生成上面这些图的脚本（Pillow）
├── .github/workflows/pages.yml  Actions 发布用的 workflow（可选）
├── .nojekyll                    关掉 Jekyll 处理
├── robots.txt / sitemap.xml     部署后把 USERNAME / REPO 换成真实值
└── CNAME.example                自定义域名模板
```

---

## 本地预览

```bash
# Python 自带服务器
python -m http.server 8080 --directory pages-guide
# 打开 http://localhost:8080

# 或 Node
npx serve pages-guide
```

直接双击 `index.html` 也能看，只有 404 页的根路径探测需要 HTTP 环境。

---

## 发布：两种方式（GitHub Pages 发布源）

### 方式 A · 从分支发布（30 秒）

1. 推到仓库：
   ```bash
   cd pages-guide
   git init && git add -A && git commit -m "init: TSAI site"
   git branch -M main
   git remote add origin https://github.com/<USER>/<REPO>.git
   git push -u origin main
   ```
2. 仓库 **Settings → Pages → Build and deployment**
3. **Source** 选 `Deploy from a branch`
4. **Branch** 选 `main`，目录选 `/ (root)` → **Save**
5. 等 Actions 里 `pages build and deployment` 变绿，访问 `https://<USER>.github.io/<REPO>/`

仓库名为 `<USER>.github.io` 时地址是 `https://<USER>.github.io/`（用户主页，去掉了仓库名那一层）。

### 方式 B · 用 GitHub Actions 发布

1. **先**在 Pages → Source 选 `GitHub Actions`
2. 推送 `main`（`.github/workflows/pages.yml` 已就位），或手动 Run workflow
3. build → upload artifact → deploy 三步全绿即上线

workflow 里三处必需配置，缺一就失败：

| 配置 | 值 | 缺失后果 |
| --- | --- | --- |
| `permissions.pages` | `write` | 部署 403 |
| `permissions.id-token` | `write` | `Get Pages site failed` |
| `environment.name` | `github-pages` | 部署被拒 / 拿不到 URL |

> 两种方式二选一。切换时先改 Source，再推 workflow；反过来做，deploy 会找不到站点。

### 上线后改这两处

- `index.html` / `links.html` / `about.html` / `deploy.html` 里的 `og:image` 是相对路径，部署后换成绝对地址（`https://<USER>.github.io/<REPO>/assets/img/og-cover.png`），否则社交平台抓不到分享图。
- `robots.txt` 与 `sitemap.xml` 里的 `USERNAME` / `REPO` 换成真实值。

### 上线后自检

```bash
gh api repos/<USER>/<REPO>/pages --jq '{html_url, status, source}'
curl -s -o /dev/null -w '%{http_code}\n' https://<USER>.github.io/<REPO>/
gh api repos/<USER>/<REPO>/pages/builds/latest --jq '{status, error}'
```

细节与 404 排查见站内 [`deploy.html`](deploy.html)。

---

## 改成你自己的

| 想改什么 | 改哪里 |
| --- | --- |
| 名字 / 标语 | `index.html` 的 `<h1>`（换成自己的 logo 图）、`.tagline`、`.sub` |
| 三个平台链接 | 全站搜 `t.me/+5ZhT1T57wfEyMTcx`、`x.com/tsai1224`、`b23.tv/YUPe5hf` 批量替换 |
| 主色 | `assets/css/style.css` 里的 `--brand` / `--brand-2` / `--brand-3`，以及 `--tg` / `--x` / `--bili` |
| 标志 | 替换 `assets/img/` 下的四张图（用 `prepare_logo.py` 可以重新生成） |
| 分享图 | `assets/img/og-cover.png` |
| 导航项 | 四个页面共用的 `<nav class="nav">` 与页脚 |

站点无外部字体、无 CDN、无统计脚本、无 Cookie，全部资源本地化，离线可用。

---

## 技术说明

- **主题**：`localStorage` 记忆 + `prefers-color-scheme` 兜底；首屏前用内联脚本写 `data-theme`，避免闪白。
- **Logo**：同一份视觉准备了墨色 / 白色两版 PNG，用 CSS 按主题切换，深色下不会糊成一块黑。
- **动画**：`IntersectionObserver` 做滚动入场，`prefers-reduced-motion` 下自动关掉。
- **复制**：优先 `navigator.clipboard`，非 HTTPS 环境回退 `execCommand`。
- **404**：样式内联 + `HEAD` 探测站点根，任意深度的路径命中都不掉样式。

---

## 参考

- [配置 GitHub Pages 站点的发布源（官方）](https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages 文档](https://docs.github.com/zh/pages)
