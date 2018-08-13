export function MP() {
  return new Promise(function (resolve, reject) {
        window.init = function () {
        resolve(BMap)
      }
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "http://api.map.baidu.com/api?v=1.5&ak=Yx0yP84r3GPLyO4ZLElxYGjgxPGKtKLF&callback=init";//"http://api.map.baidu.com/api?v=2.0&ak="+ak+"&callback=init";
      script.onerror = reject;
      document.head.appendChild(script);
      });
}