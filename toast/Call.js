/**
 * DownStar Toast Module — Call.js
 * Author: Axshul
 */

(function () {
  const base =
    "https://axshul.github.io/DownStar/toast/";

  const addScript = (src) => {
    return new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = base + src;
      s.onload = res;
      s.onerror = rej;
      document.head.appendChild(s);
    });
  };

  const addStyle = (href) => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = base + href;
    document.head.appendChild(l);
  };

  addStyle("Styles.css");
  addScript("Logic.js");
})();
