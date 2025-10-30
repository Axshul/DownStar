/**
 * DownStar Toast Module — Toast.bundle.js
 * Version: 1.0.0
 */

(function () {
  const css = `
    /* inlined Styles.css */
    ${document.createTextNode(`
      :root {
        --toast-bg-dark:#1c1c1e;--toast-bg-light:#fff;--toast-bg-success:#2ecc71;
        --toast-bg-error:#e74c3c;--toast-bg-warning:#f1c40f;--toast-bg-info:#3498db;
        --toast-color-dark:#fff;--toast-color-light:#111;--toast-radius:10px;
        --toast-padding:0.8rem 1.2rem;--toast-shadow:0 6px 20px rgba(0,0,0,.25);
      }
      .downstar-toast-container{position:fixed;display:flex;flex-direction:column;z-index:9999;gap:10px;pointer-events:none;}
      .downstar-toast-container.top-right{top:20px;right:20px;align-items:flex-end;}
      .downstar-toast-container.bottom-right{bottom:20px;right:20px;align-items:flex-end;}
      .downstar-toast{pointer-events:all;min-width:250px;max-width:400px;color:#fff;border-radius:10px;padding:0.8rem 1.2rem;
        box-shadow:0 6px 20px rgba(0,0,0,0.25);font-family:Inter,sans-serif;font-size:0.95rem;
        opacity:0;transform:translateY(20px);animation:toastSlideIn .4s ease forwards;display:flex;justify-content:space-between;align-items:center;}
      .downstar-toast.success{background:#2ecc71;}
      .downstar-toast.error{background:#e74c3c;}
      .downstar-toast.warning{background:#f1c40f;color:#111;}
      .downstar-toast.info{background:#3498db;}
      .downstar-toast.default{background:#1c1c1e;color:#fff;}
      .toast-close{background:none;border:none;color:inherit;font-size:1.2rem;cursor:pointer;padding:0 .3rem;}
      .hide{animation:toastSlideOut .3s ease forwards;}
      @keyframes toastSlideIn{from{opacity:0;transform:translateY(20px) scale(.95);}to{opacity:1;transform:translateY(0) scale(1);}}
      @keyframes toastSlideOut{from{opacity:1;transform:translateY(0) scale(1);}to{opacity:0;transform:translateY(10px) scale(.9);}}
    `)}
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
})();
