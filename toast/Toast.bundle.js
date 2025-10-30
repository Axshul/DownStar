/*!
 * DownStar Toast.bundle.js v1.0.0 (FIXED)
 * Author: Axshul (https://github.com/Axshul)
 * Description: Production-ready, self-contained toast notification system.
 * Fix: Harmonized with Logic.js and Styles.css (modular versions).
 */

(() => {
  // Prevent reinitialization and check for existing instance
  if (window.Toast && window.Toast.__ready) return;

  // --- 1. CSS Styles (from Styles.css) ---
  const css = `
  /**
   * DownStar Toast Module — Styles.css
   */

  :root {
    --toast-bg-dark: #1c1c1e;
    --toast-bg-light: #ffffff;
    --toast-bg-success: #2ecc71;
    --toast-bg-error: #e74c3c;
    --toast-bg-warning: #f1c40f;
    --toast-bg-info: #3498db;
    --toast-color-dark: #fff;
    --toast-color-light: #111;
    --toast-radius: 10px;
    --toast-padding: 0.8rem 1.2rem;
    --toast-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  .downstar-toast-container {
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 9999;
    gap: 10px;
    pointer-events: none;
  }

  .downstar-toast-container.top-right {
    top: var(--offset-y);
    right: var(--offset-x);
    align-items: flex-end;
  }

  .downstar-toast-container.top-left {
    top: var(--offset-y);
    left: var(--offset-x);
    align-items: flex-start;
  }

  .downstar-toast-container.bottom-right {
    bottom: var(--offset-y);
    right: var(--offset-x);
    align-items: flex-end;
  }

  .downstar-toast-container.bottom-left {
    bottom: var(--offset-y);
    left: var(--offset-x);
    align-items: flex-start;
  }

  .downstar-toast {
    pointer-events: all;
    min-width: 250px;
    max-width: 400px;
    color: var(--toast-color-dark);
    border-radius: var(--toast-radius);
    padding: var(--toast-padding);
    box-shadow: var(--toast-shadow);
    font-family: "Inter", sans-serif;
    font-size: 0.95rem;
    opacity: 0;
    transform: translateY(20px);
    animation: toastSlideIn 0.4s ease forwards;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .downstar-toast.success { background: var(--toast-bg-success); }
  .downstar-toast.error { background: var(--toast-bg-error); }
  .downstar-toast.warning { background: var(--toast-bg-warning); color: var(--toast-color-light); }
  .downstar-toast.info { background: var(--toast-bg-info); }
  .downstar-toast.default {
    background: var(--toast-bg-dark);
    color: var(--toast-color-dark);
  }

  .downstar-toast-container.light .downstar-toast.default {
    background: var(--toast-bg-light);
    color: var(--toast-color-light);
  }

  .toast-close {
    background: none;
    border: none;
    color: inherit;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0 0.3rem;
    line-height: 1;
    transition: opacity 0.2s ease;
    margin-left: 12px; /* Added for spacing */
    float: right;
  }

  .toast-close:hover { opacity: 0.6; }

  .hide {
    animation: toastSlideOut 0.3s ease forwards;
  }

  @keyframes toastSlideIn {
    from { opacity: 0; transform: translateY(20px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes toastSlideOut {
    from { opacity: 1; transform: translateY(0) scale(1); }
    to { opacity: 0; transform: translateY(10px) scale(0.9); }
  }
  `;

  // --- 2. DownStar Toast Core Logic (from Logic.js) ---

  const defaultConfig = {
    position: "top-right",
    duration: 4000,
    maxToasts: 5,
    newestOnTop: true,
    pauseOnHover: true,
    showClose: true,
    animation: "slide",
    theme: "dark",
    offsetX: "20px",
    offsetY: "20px",
  };

  let config = { ...defaultConfig };
  let container;
  let __ready = false; // Internal flag for bundle

  function createContainer() {
    if (container) return container;

    // Inject CSS once
    if (!__ready) {
      const style = document.createElement("style");
      style.textContent = css;
      document.head.appendChild(style);
      __ready = true;
    }

    container = document.createElement("div");
    container.id = "downstar-toast-container";
    updateContainerPosition();
    document.body.appendChild(container);
    return container;
  }

  function updateContainerPosition() {
    if (!container) return;
    container.className = `downstar-toast-container ${config.position} ${config.theme}`;
    container.style.setProperty("--offset-x", config.offsetX);
    container.style.setProperty("--offset-y", config.offsetY);
  }

  function removeToast(toast) {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }

  function createToast(msg, type = "default", options = {}) {
    const settings = { ...config, ...options };
    const toast = document.createElement("div");
    // Ensure the correct class name is used
    toast.className = `downstar-toast ${type} ${settings.animation}`;

    // Structure matches Logic.js: content div holding message and close button
    const content = document.createElement("div");
    content.className = "toast-content";
    content.innerHTML = `<span class="toast-message">${msg}</span>`;
    
    // Logic for close button
    if (settings.showClose) {
      const closeBtn = document.createElement("button");
      closeBtn.className = "toast-close";
      closeBtn.innerHTML = "&times;";
      closeBtn.onclick = () => removeToast(toast);
      content.appendChild(closeBtn);
    }

    toast.appendChild(content);

    // Auto remove logic
    let timer = setTimeout(() => removeToast(toast), settings.duration);
    if (settings.pauseOnHover) {
      toast.onmouseenter = () => clearTimeout(timer);
      toast.onmouseleave = () =>
        (timer = setTimeout(() => removeToast(toast), settings.duration));
    }

    return toast;
  }

  function show(msg, type = "default", options = {}) {
    const container = createContainer();
    const toast = createToast(msg, type, options);
    
    // Newest on top logic
    if (config.newestOnTop) container.prepend(toast);
    else container.append(toast);

    // Max toasts logic (using maxToasts property)
    if (container.children.length > config.maxToasts) {
      const target = config.newestOnTop
        ? container.lastChild
        : container.firstChild;
      removeToast(target);
    }
  }

  // Public API
  const Toast = {
    __ready: true, // Mark as ready for the prevention check
    show: (msg, options) => show(msg, "default", options),
    success: (msg, options) => show(msg, "success", options),
    error: (msg, options) => show(msg, "error", options),
    warning: (msg, options) => show(msg, "warning", options),
    info: (msg, options) => show(msg, "info", options),

    clearAll: () => {
      if (container) container.innerHTML = "";
    },

    config: (custom) => {
      config = { ...config, ...custom };
      updateContainerPosition();
    },
  };

  // Attach to window and log
  window.Toast = Toast;
  console.log("%cDownStar Toast v1.0.0 Loaded (Bundle FIXED) ✅", "color: #2ecc71;");
})();