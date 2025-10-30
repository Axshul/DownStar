/*!
 * DownStar Toast.bundle.js v1.0.0
 * Author: Axshul (https://github.com/Axshul)
 * Description: Production-ready, self-contained toast notification system.
 */

(() => {
  // Prevent reinitialization
  if (window.Toast && window.Toast.__ready) return;

  // DOM Ready Helper
  const onReady = (fn) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  };

  // CSS Styles (inline)
  const css = `
  :root {
    --toast-font: system-ui, sans-serif;
    --toast-radius: 8px;
    --toast-shadow: 0 4px 10px rgba(0,0,0,0.25);
    --toast-bg: rgba(20, 20, 20, 0.95);
    --toast-color: #fff;
    --toast-success-bg: #22c55e;
    --toast-error-bg: #ef4444;
    --toast-info-bg: #3b82f6;
    --toast-duration: 4000ms;
  }

  .toast-container {
    position: fixed;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    right: 20px;
    bottom: 20px;
    pointer-events: none;
  }

  .toast {
    pointer-events: auto;
    background: var(--toast-bg);
    color: var(--toast-color);
    padding: 14px 18px;
    border-radius: var(--toast-radius);
    box-shadow: var(--toast-shadow);
    font-family: var(--toast-font);
    transform: translateY(25px);
    opacity: 0;
    transition: all 0.35s ease;
  }

  .toast.show {
    transform: translateY(0);
    opacity: 1;
  }

  .toast.success { background: var(--toast-success-bg); }
  .toast.error { background: var(--toast-error-bg); }
  .toast.info { background: var(--toast-info-bg); }

  .toast-close {
    float: right;
    margin-left: 12px;
    font-weight: bold;
    cursor: pointer;
  }
  `;

  // Toast Core Logic
  const Toast = {
    __ready: false,
    config: {
      duration: 4000,
      position: "bottom-right",
      max: 5,
      closeButton: true,
    },
    _container: null,
    _toasts: [],

    _init() {
      if (this.__ready) return;
      this.__ready = true;

      // Inject CSS
      const style = document.createElement("style");
      style.textContent = css;
      document.head.appendChild(style);

      // Create container
      this._container = document.createElement("div");
      this._container.className = "toast-container";
      document.body.appendChild(this._container);
    },

    _createToast(message, type) {
      const toast = document.createElement("div");
      toast.className = `toast ${type}`;
      toast.innerHTML = `${message}`;

      if (this.config.closeButton) {
        const close = document.createElement("span");
        close.textContent = "×";
        close.className = "toast-close";
        close.onclick = () => this._remove(toast);
        toast.appendChild(close);
      }

      return toast;
    },

    _render(toast) {
      this._container.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add("show"));
      setTimeout(() => this._remove(toast), this.config.duration);
    },

    _remove(toast) {
      if (!toast) return;
      toast.classList.remove("show");
      setTimeout(() => {
        toast.remove();
        this._toasts = this._toasts.filter((t) => t !== toast);
      }, 300);
    },

    show(message, type = "info") {
      if (!this._container) this._init();

      if (this._toasts.length >= this.config.max) {
        this._remove(this._toasts.shift());
      }

      const toast = this._createToast(message, type);
      this._toasts.push(toast);
      this._render(toast);
    },

    success(msg) { this.show(msg, "success"); },
    error(msg) { this.show(msg, "error"); },
    info(msg) { this.show(msg, "info"); },

    set(options = {}) { Object.assign(this.config, options); }
  };

  // DOM Ready → Initialize safely
  onReady(() => {
    Toast._init();
    window.Toast = Toast;
    console.log("%cDownStar Toast v1.0.0 Loaded ✅", "color: #22c55e;");
  });
})();
