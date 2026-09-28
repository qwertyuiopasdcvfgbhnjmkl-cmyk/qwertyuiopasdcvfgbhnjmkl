// 標記 JavaScript 可用。
// CSS 中所有「初始隱藏」的動效狀態都寫在 .js 之下，
// 因此這個檔案若載入失敗，內容會直接顯示而非變成空白。
// 刻意不使用 defer／async，維持在 <head> 同步執行，避免畫面閃爍。
document.documentElement.classList.add('js');
