/**
 * DownStar Toast Module — Logic.js
 * Author: Axshul
 * Version: 1.0.0
 */

(function (global) {
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

  function createContainer() {
    if (container) return container;

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
    toast.className = `downstar-toast ${type} ${settings.animation}`;

    const content = document.createElement("div");
    content.className = "toast-content";
    content.innerHTML = `<span class="toast-message">${msg}</span>`;

    if (settings.showClose) {
      const closeBtn = document.createElement("button");
      closeBtn.className = "toast-close";
      closeBtn.innerHTML = "&times;";
      closeBtn.onclick = () => removeToast(toast);
      content.appendChild(closeBtn);
    }

    toast.appendChild(content);

    // Auto remove
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
    if (config.newestOnTop) container.prepend(toast);
    else container.append(toast);

    if (container.children.length > config.maxToasts) {
      const target = config.newestOnTop
        ? container.lastChild
        : container.firstChild;
      removeToast(target);
    }
  }

  const Toast = {
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

  global.Toast = Toast;
})(window);
