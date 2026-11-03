# TSAI 路 涓汉涓婚〉

**绾夸笂鍦板潃锛?https://tsai.xubi.org/>** 路 浠撳簱锛?https://github.com/mabaca123hsu/mabaca123hsu.github.io>

鐢?GitHub Pages 浠?`main` 鍒嗘敮鏍圭洰褰曡嚜鍔ㄥ彂甯冿紙姣忔 push 鍚庣害 30 绉掗噸寤猴級銆?

涓€涓?*闆朵緷璧栥€侀浂鏋勫缓**鐨勪釜浜哄叆鍙ｇ珯锛氭墜鍐?HTML / CSS / JS锛屾繁娴呭弻涓婚锛屾墭绠″湪 GitHub Pages 涓娿€?
绔欏悕 **TSAI**锛屼富瑙嗚鐢?TSAI 鏍囧織锛屼笁涓钩鍙板叆鍙ｈ疮绌垮叏绔欙細

| 骞冲彴 | 閾炬帴 |
| --- | --- |
| Telegram 缇ょ粍锛堜富闃靛湴锛?| https://t.me/+PWWlJQZPd59jMzkx |
| X | https://x.com/tsai1224?s=11 |
| 鍝斿摡鍝斿摡 | https://b23.tv/YUPe5hf |

---

## 椤甸潰

```
pages-guide/
鈹溾攢鈹€ index.html        棣栭〉锛氭爣蹇椾富瑙嗚銆佷笁涓钩鍙板叆鍙ｃ€佸叧浜庛€丆TA
鈹溾攢鈹€ links.html        閾炬帴鑱氬悎椤碉紙鍙～鍒颁换浣?bio锛夛細涓€閿鍒舵瘡鏉￠摼鎺?鈹溾攢鈹€ about.html        鍏充簬 + 鑱旂郴鏂瑰紡 + FAQ
鈹溾攢鈹€ deploy.html       鏈珯閮ㄧ讲绗旇锛欸itHub Pages 鍙戝竷婧愪袱绉嶉厤缃柟寮?鈹溾攢鈹€ 404.html          鑷寘鍚?404 椤碉紙鏍峰紡鍐呰仈銆佽嚜鍔ㄦ帰娴嬬珯鐐规牴锛?鈹溾攢鈹€ assets/
鈹?  鈹溾攢鈹€ css/style.css 鍏ㄩ儴鏍峰紡锛堟繁娴呬富棰樸€佸搷搴斿紡銆佹墦鍗帮級
鈹?  鈹溾攢鈹€ js/main.js    涓婚鍒囨崲銆佺Щ鍔ㄥ鑸€佹粴鍔ㄥ嚭鐜般€佸鍒堕摼鎺?鈹?  鈹斺攢鈹€ img/
鈹?      鈹溾攢鈹€ tsai-logo.png        鍘熷鏍囧織锛?254脳1254锛?鈹?      鈹溾攢鈹€ tsai-logo-ink.png    娣辫壊瀛楄抗 + 閫忔槑搴曪紙娴呰壊涓婚鐢級
鈹?      鈹溾攢鈹€ tsai-logo-paper.png  鐧借壊瀛楄抗 + 閫忔槑搴曪紙娣辫壊涓婚鐢級
鈹?      鈹溾攢鈹€ favicon.png          娓愬彉鍦嗚鏂瑰潡 + 鐧藉瓧锛?12脳512
鈹?      鈹溾攢鈹€ apple-touch-icon.png 180脳180
鈹?      鈹溾攢鈹€ og-cover.png         鍒嗕韩鍥?1200脳630
鈹?      鈹斺攢鈹€ prepare_logo.py      鐢熸垚涓婇潰杩欎簺鍥剧殑鑴氭湰锛圥illow锛?鈹溾攢鈹€ .github/workflows/pages.yml  Actions 鍙戝竷鐢ㄧ殑 workflow锛堝彲閫夛級
鈹溾攢鈹€ .nojekyll                    鍏虫帀 Jekyll 澶勭悊
鈹溾攢鈹€ robots.txt / sitemap.xml     閮ㄧ讲鍚庢妸 USERNAME / REPO 鎹㈡垚鐪熷疄鍊?鈹斺攢鈹€ CNAME.example                鑷畾涔夊煙鍚嶆ā鏉?```

---

## 鏈湴棰勮

```bash
# Python 鑷甫鏈嶅姟鍣?python -m http.server 8080 --directory pages-guide
# 鎵撳紑 http://localhost:8080

# 鎴?Node
npx serve pages-guide
```

鐩存帴鍙屽嚮 `index.html` 涔熻兘鐪嬶紝鍙湁 404 椤电殑鏍硅矾寰勬帰娴嬮渶瑕?HTTP 鐜銆?
---

## 鍙戝竷锛氫袱绉嶆柟寮忥紙GitHub Pages 鍙戝竷婧愶級

### 鏂瑰紡 A 路 浠庡垎鏀彂甯冿紙30 绉掞級

1. 鎺ㄥ埌浠撳簱锛?   ```bash
   cd pages-guide
   git init && git add -A && git commit -m "init: TSAI site"
   git branch -M main
   git remote add origin https://github.com/<USER>/<REPO>.git
   git push -u origin main
   ```
2. 浠撳簱 **Settings 鈫?Pages 鈫?Build and deployment**
3. **Source** 閫?`Deploy from a branch`
4. **Branch** 閫?`main`锛岀洰褰曢€?`/ (root)` 鈫?**Save**
5. 绛?Actions 閲?`pages build and deployment` 鍙樼豢锛岃闂?`https://<USER>.github.io/<REPO>/`

浠撳簱鍚嶄负 `<USER>.github.io` 鏃跺湴鍧€鏄?`https://<USER>.github.io/`锛堢敤鎴蜂富椤碉紝鍘绘帀浜嗕粨搴撳悕閭ｄ竴灞傦級銆?
### 鏂瑰紡 B 路 鐢?GitHub Actions 鍙戝竷

1. **鍏?*鍦?Pages 鈫?Source 閫?`GitHub Actions`
2. 鎺ㄩ€?`main`锛坄.github/workflows/pages.yml` 宸插氨浣嶏級锛屾垨鎵嬪姩 Run workflow
3. build 鈫?upload artifact 鈫?deploy 涓夋鍏ㄧ豢鍗充笂绾?
workflow 閲屼笁澶勫繀闇€閰嶇疆锛岀己涓€灏卞け璐ワ細

| 閰嶇疆 | 鍊?| 缂哄け鍚庢灉 |
| --- | --- | --- |
| `permissions.pages` | `write` | 閮ㄧ讲 403 |
| `permissions.id-token` | `write` | `Get Pages site failed` |
| `environment.name` | `github-pages` | 閮ㄧ讲琚嫆 / 鎷夸笉鍒?URL |

> 涓ょ鏂瑰紡浜岄€変竴銆傚垏鎹㈡椂鍏堟敼 Source锛屽啀鎺?workflow锛涘弽杩囨潵鍋氾紝deploy 浼氭壘涓嶅埌绔欑偣銆?
### 涓婄嚎鍚庢敼杩欎袱澶?
- `index.html` / `links.html` / `about.html` / `deploy.html` 閲岀殑 `og:image` 鏄浉瀵硅矾寰勶紝閮ㄧ讲鍚庢崲鎴愮粷瀵瑰湴鍧€锛坄https://<USER>.github.io/<REPO>/assets/img/og-cover.png`锛夛紝鍚﹀垯绀句氦骞冲彴鎶撲笉鍒板垎浜浘銆?- `robots.txt` 涓?`sitemap.xml` 閲岀殑 `USERNAME` / `REPO` 鎹㈡垚鐪熷疄鍊笺€?
### 涓婄嚎鍚庤嚜妫€

```bash
gh api repos/<USER>/<REPO>/pages --jq '{html_url, status, source}'
curl -s -o /dev/null -w '%{http_code}\n' https://<USER>.github.io/<REPO>/
gh api repos/<USER>/<REPO>/pages/builds/latest --jq '{status, error}'
```

缁嗚妭涓?404 鎺掓煡瑙佺珯鍐?[`deploy.html`](deploy.html)銆?
---

## 鏀规垚浣犺嚜宸辩殑

| 鎯虫敼浠€涔?| 鏀瑰摢閲?|
| --- | --- |
| 鍚嶅瓧 / 鏍囪 | `index.html` 鐨?`<h1>`锛堟崲鎴愯嚜宸辩殑 logo 鍥撅級銆乣.tagline`銆乣.sub` |
| 涓変釜骞冲彴閾炬帴 | 鍏ㄧ珯鎼?`t.me/+PWWlJQZPd59jMzkx`銆乣x.com/tsai1224`銆乣b23.tv/YUPe5hf` 鎵归噺鏇挎崲 |
| 涓昏壊 | `assets/css/style.css` 閲岀殑 `--brand` / `--brand-2` / `--brand-3`锛屼互鍙?`--tg` / `--x` / `--bili` |
| 鏍囧織 | 鏇挎崲 `assets/img/` 涓嬬殑鍥涘紶鍥撅紙鐢?`prepare_logo.py` 鍙互閲嶆柊鐢熸垚锛?|
| 鍒嗕韩鍥?| `assets/img/og-cover.png` |
| 瀵艰埅椤?| 鍥涗釜椤甸潰鍏辩敤鐨?`<nav class="nav">` 涓庨〉鑴?|

绔欑偣鏃犲閮ㄥ瓧浣撱€佹棤 CDN銆佹棤缁熻鑴氭湰銆佹棤 Cookie锛屽叏閮ㄨ祫婧愭湰鍦板寲锛岀绾垮彲鐢ㄣ€?
---

## 鎶€鏈鏄?
- **涓婚**锛歚localStorage` 璁板繂 + `prefers-color-scheme` 鍏滃簳锛涢灞忓墠鐢ㄥ唴鑱旇剼鏈啓 `data-theme`锛岄伩鍏嶉棯鐧姐€?- **Logo**锛氬悓涓€浠借瑙夊噯澶囦簡澧ㄨ壊 / 鐧借壊涓ょ増 PNG锛岀敤 CSS 鎸変富棰樺垏鎹紝娣辫壊涓嬩笉浼氱硦鎴愪竴鍧楅粦銆?- **鍔ㄧ敾**锛歚IntersectionObserver` 鍋氭粴鍔ㄥ叆鍦猴紝`prefers-reduced-motion` 涓嬭嚜鍔ㄥ叧鎺夈€?- **澶嶅埗**锛氫紭鍏?`navigator.clipboard`锛岄潪 HTTPS 鐜鍥為€€ `execCommand`銆?- **404**锛氭牱寮忓唴鑱?+ `HEAD` 鎺㈡祴绔欑偣鏍癸紝浠绘剰娣卞害鐨勮矾寰勫懡涓兘涓嶆帀鏍峰紡銆?
---

## 鍙傝€?
- [閰嶇疆 GitHub Pages 绔欑偣鐨勫彂甯冩簮锛堝畼鏂癸級](https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [GitHub Pages 鏂囨。](https://docs.github.com/zh/pages)
