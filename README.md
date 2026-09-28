# 餐飲視覺個人網站

澎湖科技大學餐飲系學生的個人網站，專長中餐。
部署於 GitHub Pages：https://qwertyuiopasdcvfgbhnjmkl-cmyk.github.io

## 技術選擇

| 項目 | 採用 | 理由 |
|---|---|---|
| 結構 | 純 HTML + CSS | 作品僅 3 件，引入框架只增加複雜度與故障點 |
| 字體 | 思源宋體（標題）+ 思源黑體（內文） | 宋體標題拉高質感，黑體內文確保可讀 |
| 部署 | GitHub Pages 從分支部署 | 純靜態不需編譯，維護成本最低，無建置流程可壞 |
| 動畫 | 有（捲動進場・朱印蓋印・墨暈・視差） | 2026-09-27 依需求變更加入 |

## 檔案結構

```
├── index.html          頁面內容與結構
├── css/
│   └── style.css       設計系統與版面
├── js/
│   └── main.js         互動效果（捲動進場・朱印蓋印・視差）
├── images/             背景圖與作品照片（檔名規則見 images/README.md）
└── TODO.md             開發進度清單
```

## 互動效果

所有效果都可優雅失效：`js/main.js` 未載入、`IntersectionObserver` 不支援，
或使用者系統設定「減少動態效果」時，內容一律正常顯示，不會出現空白頁面。
初始隱藏狀態一律寫在 `.js` 類別之下，因此不會影響一般閱讀。

## 設計系統

色彩與間距以 CSS 變數定義在 `css/style.css` 的 `:root`，要調整改那裡即可。

| 用途 | 色值 | 對宣紙底對比 | 說明 |
|---|---|---|---|
| 背景 | `#EFE8DC` | — | 宣紙米色，另疊 2.5% 紙纖維噪點 |
| 主要文字 | `#2E2A26` | 11.69 : 1 | 墨色，無障礙標準 AAA |
| 次要文字 | `#5F5A52` | 5.62 : 1 | 淡墨，無障礙標準 AA |
| 分隔線 | `rgba(46,42,38,0.14)` | — | 墨色透明線 |
| 連結 | `#2E2A26` | 11.69 : 1 | 與主要文字同色 |
| 硃砂印章 | `#9E2B25` | 6.10 : 1 | 中國風點綴 |

文字疊在山景上時（最壞情況）主要文字為 9.96 : 1、次要文字 4.79 : 1，皆通過 AA。
山水僅繪製於開場區，內文區維持乾淨宣紙底以確保可讀性。

間距採 8px 刻度：`8 / 16 / 24 / 40 / 64 / 96`。
內文寬度上限 640px（約中文 40 字一行），圖片寬度上限 896px。

## 本機預覽

直接用瀏覽器開啟 `index.html` 即可，不需要安裝任何東西或啟動伺服器。

## 部署到 GitHub Pages

1. 在帳號 `qwertyuiopasdcvfgbhnjmkl-cmyk` 下建立一個 **Public** 倉庫，名稱為 `qwertyuiopasdcvfgbhnjmkl`
2. 將本資料夾的檔案推上去（`index.html`、`css/`、`images/`）
3. 到倉庫 **Settings → Pages**
4. **Source** 選 `Deploy from a branch`
5. **Branch** 選 `main`，資料夾選 `/ (root)`
6. 儲存，等 1–2 分鐘
7. 訪問 https://qwertyuiopasdcvfgbhnjmkl-cmyk.github.io

注意：倉庫必須是 **Public**，Private 倉庫無法使用 GitHub Pages。
注意：這是**專案網站**（repository site），所以網址會帶 `/qwertyuiopasdcvfgbhnjmkl` 這段子路徑。
注意：頁面內部使用相對路徑（`css/style.css`），因此在子路徑下也能正常載入，不需額外設定 base。

## 字體說明

字體由 Google Fonts 載入，需要網路。若要完全離線使用，需自行下載字型檔放入本機，
但 Noto 系列完整字型約 1–4 MB，對載入速度有影響。
