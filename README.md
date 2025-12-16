# manhuafilter

**前端架構**

---
負責使用者看到的畫面、互動邏輯與資料呈現。

核心框架：React.js

使用 Functional Components 與 Hooks (如 useState, useEffect, useRef) 來管理狀態與生命週期。

樣式設計 (Styling)：CSS3

使用 CSS Variables (:root) 定義全站色票，方便統一管理。

使用 Flexbox 與 Grid Layout 進行響應式排版 (RWD)，適配電腦與手機。

Animations：使用 @keyframes 製作轉盤旋轉、卡片淡入與彈窗效果。

資料持久化 (Persistence)：LocalStorage

利用瀏覽器的 LocalStorage 來儲存使用者的漫畫清單，達到「重新整理後資料不消失」的效果，模擬簡易的資料庫功能。

互動邏輯：

轉盤系統：透過數學公式計算旋轉角度與機率，實現隨機抽選功能。

篩選器：實作多條件標籤篩選 (Tag Filtering)。

**後端架構**

---
負責處理檔案上傳與提供 API 服務。

執行環境：Node.js

網頁框架：Express.js

用來建立伺服器，同時負責「提供前端靜態檔案 (Static Files)」與「處理 API 請求」。

檔案處理：Multer

這是一個 Node.js 中介軟體 (Middleware)，專門用來處理 multipart/form-data，也就是圖片上傳的功能。

API 設計：RESTful API

設計了 POST /api/upload-image 接口，接收前端傳來的圖片並回傳儲存路徑。

路徑處理：

解決了跨域問題 (CORS) 與 混合內容問題 (Mixed Content)，使用相對路徑 (/uploads/...) 來確保在 HTTPS 環境下圖片能正常顯示。

**API串接**

---
交換資料：Restful API

背景音樂：YouTube IFrame Player API

技術細節：不使用一般的 autoplay，而是利用 enablejsapi=1 參數開啟控制權。

通訊方式：透過 React 的 useRef 取得 iframe 實體，並使用 postMessage 發送 playVideo / pauseVideo 指令，實現「背景播放、切換頁面不中斷、可暫停續播」的高級功能。

**部署架構**

---
平台：Render (Web Service)

架構模式：單體式全端部署 (Monolithic Deployment)

前端 React 經過 npm run build 打包成靜態檔案。

後端 Express 透過 app.use(express.static(...)) 統一對外服務。
