/* Toast.bundle.js — DownStar Toast Module (Standalone) */

(() => {
  if (window.Toast) return; // Prevent redefinition

  const style = document.createElement('style');
  style.textContent = `
  :root {
    --toast-bg: rgba(20, 20, 20, 0.9);
    --toast-color: #fff;
    --toast-success-bg: #16a34a;
    --toast-error-bg: #dc2626;
    --toast-info-bg: #2563eb;
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
    padding: 12px 18px;
    border-radius: 8px;
    font-family: system-ui, sans-serif;
    background: var(--toast-bg);
    color: var(--toast-color);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.35s ease;
    pointer-events: auto;
  }

  .toast.show {
    opacity: 1;
    transform: translateY(0);
  }

  .toast.success { background: var(--toast-success-bg); }
  .toast.error { background: var(--toast-error-bg); }
  .toast.info { background: var(--toast-info-bg); }
  `;
  document.head.appendChild(style);

  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);

  const Toast = {
    config: {
      duration: 4000,
      position: 'bottom-right',
      max: 5
    },
    _toasts: [],
    _render(toast) {
      container.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add('show'));
      setTimeout(() => this._remove(toast), this.config.duration);
    },
    _remove(toast) {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
        this._toasts = this._toasts.filter(t => t !== toast);
      }, 300);
    },
    show(msg, type = 'info') {
      if (this._toasts.length >= this.config.max) {
        this._remove(this._toasts.shift());
      }
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.textContent = msg;
      this._toasts.push(toast);
      this._render(toast);
    },
    success(msg) { this.show(msg, 'success'); },
    error(msg) { this.show(msg, 'error'); },
    info(msg) { this.show(msg, 'info'); },
    set(config) { Object.assign(this.config, config); }
  };

  window.Toast = Toast;
})();
