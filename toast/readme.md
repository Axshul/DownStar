<div align="center">

# 🔔 DownStar Toast Module

> Enterprise-grade toast notifications with zero dependencies

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Axshul/DownStar)
[![Size](https://img.shields.io/badge/size-<3kb-green.svg)](https://github.com/Axshul/DownStar/toast)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Axshul/DownStar/LICENSE)

[Quick Start](#quick-start) • [Examples](#examples) • [Configuration](#configuration) • [Styling](#styling) • [API](#api-reference)

<br>

<img src="preview.gif" alt="DownStar Toast Preview" width="600px">

</div>

## ✨ Key Features

- **Lightweight** - Less than 3KB minified
- **Zero Dependencies** - Pure vanilla JavaScript
- **Multiple Positions** - 4 corner positions
- **Smart Stacking** - Configurable toast limits
- **Theme Support** - Dark/Light modes built-in
- **Pause on Hover** - User-friendly interactions
- **Customizable** - Easy to style and extend
- **Type System** - Full TypeScript support

## 🚀 Quick Start

### Using CDN (Recommended)

```html
<!-- Production Build (Recommended) -->
<script src="https://cdn.jsdelivr.net/gh/Axshul/DownStar@latest/toast/Toast.bundle.js"></script>

<!-- Development Build -->
<script src="https://axshul.github.io/DownStar/toast/Call.js"></script>
```

### Basic Usage

```javascript
// Simple notification
Toast.show("Hello World!");

// Type-specific notifications
Toast.success("Operation completed successfully!");
Toast.error("Something went wrong!");
Toast.warning("Please check your input");
Toast.info("New updates available");
```

## 📦 Package Structure

```
toast/
├── Logic.js         # Core functionality
├── Styles.css       # Visual styling
├── Call.js         # Development loader
└── Toast.bundle.js  # Production bundle
```

### Build Modes

- **Development Mode** (`Call.js`): Separate files for easy debugging and customization
- **Production Mode** (`Toast.bundle.js`): Minified single file for optimal performance
- **CDN Mode**: Versioned, cached delivery through jsDelivr

## 🎯 Examples

### Position Control

```javascript
// Top positions
Toast.show("Top right notification", { position: "top-right" });
Toast.show("Top left notification", { position: "top-left" });

// Bottom positions
Toast.show("Bottom right notification", { position: "bottom-right" });
Toast.show("Bottom left notification", { position: "bottom-left" });
```

### Duration Control

```javascript
// Quick notification (2 seconds)
Toast.show("Quick message", { duration: 2000 });

// Persistent notification
Toast.show("Important message", { duration: 10000 });

// With pause on hover
Toast.show("Hover to pause", { 
    duration: 3000,
    pauseOnHover: true 
});
```

### Stack Management

```javascript
// Limit maximum visible toasts
Toast.config({ maxToasts: 3 });

// Control stack direction
Toast.config({ newestOnTop: true });

// Clear all toasts
Toast.clearAll();
```

### Theme Switching

```javascript
// Dark theme (default)
Toast.config({ theme: "dark" });

// Light theme
Toast.config({ theme: "light" });

// With custom positioning
Toast.config({ 
    theme: "dark",
    position: "top-right",
    offsetX: "30px",
    offsetY: "20px"
});
```

### Advanced Usage

```javascript
// Complex configuration
Toast.show("Custom configured toast", {
    duration: 5000,
    position: "top-right",
    theme: "light",
    pauseOnHover: true,
    showClose: true,
    className: "my-custom-toast",
    onClick: () => {
        console.log("Toast clicked!");
    },
    onClose: () => {
        console.log("Toast closed!");
    }
});

// Multiple concurrent toasts
function showMultiple() {
    Toast.info("Processing...");
    Toast.success("Step 1 complete");
    Toast.warning("Please wait...");
}
```

## ⚙️ Configuration

### Global Settings

```javascript
Toast.config({
    // Position settings
    position: "top-right",     // top-right, top-left, bottom-right, bottom-left
    offsetX: "20px",          // Horizontal offset from edge
    offsetY: "20px",          // Vertical offset from edge
    
    // Behavior settings
    duration: 4000,           // Display duration in ms
    maxToasts: 5,            // Maximum concurrent toasts
    newestOnTop: true,       // Stack direction
    pauseOnHover: true,      // Pause timer on hover
    
    // Visual settings
    showClose: true,         // Show close button
    theme: "dark",           // dark or light theme
    animation: "slide"       // Animation type
});
```

### Type Definitions

```typescript
interface ToastOptions {
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    duration?: number;
    maxToasts?: number;
    newestOnTop?: boolean;
    pauseOnHover?: boolean;
    showClose?: boolean;
    theme?: 'dark' | 'light';
    offsetX?: string;
    offsetY?: string;
    className?: string;
    onClick?: () => void;
    onClose?: () => void;
}
```

## 🎨 Styling

### Default Theme Variables

```css
:root {
    /* Background colors */
    --toast-bg-dark: #1c1c1e;
    --toast-bg-light: #ffffff;
    --toast-bg-success: #2ecc71;
    --toast-bg-error: #e74c3c;
    --toast-bg-warning: #f1c40f;
    --toast-bg-info: #3498db;
    
    /* Text colors */
    --toast-color-dark: #fff;
    --toast-color-light: #111;
    
    /* Layout */
    --toast-radius: 10px;
    --toast-padding: 0.8rem 1.2rem;
    --toast-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}
```

### Custom Styling Examples

```css
/* Custom toast appearance */
.my-custom-toast {
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    color: white;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Custom animation */
.my-custom-toast.toast-enter {
    transform: translateY(100%);
    opacity: 0;
}

.my-custom-toast.toast-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: all 300ms ease-out;
}
```

### Animation Classes

The following classes are available for custom animations:

- `.toast-enter`: Initial state
- `.toast-enter-active`: Animation in progress
- `.toast-exit`: Exit animation start
- `.toast-exit-active`: Exit animation in progress

## 📚 API Reference

### Core Methods

| Method | Description | Parameters |
|--------|-------------|------------|
| `show(message, options?)` | Show a default toast | `message: string, options?: ToastOptions` |
| `success(message, options?)` | Show success toast | `message: string, options?: ToastOptions` |
| `error(message, options?)` | Show error toast | `message: string, options?: ToastOptions` |
| `warning(message, options?)` | Show warning toast | `message: string, options?: ToastOptions` |
| `info(message, options?)` | Show info toast | `message: string, options?: ToastOptions` |
| `clearAll()` | Remove all toasts | none |
| `config(options)` | Set global config | `options: ToastConfig` |

### Events

Toasts emit the following events that you can handle via options:

- `onClick`: Triggered when toast is clicked
- `onClose`: Triggered when toast is closed (manually or automatically)

### Position Values

Available position values for the `position` option:

- `"top-right"` (default)
- `"top-left"`
- `"bottom-right"`
- `"bottom-left"`

### Theme Values

Available theme values:

- `"dark"` (default)
- `"light"`

## 🌐 Browser Support

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 49+ |
| Firefox | 52+ |
| Safari | 10+ |
| Edge | 14+ |
| Opera | 36+ |

For older browsers, the bundled version includes necessary polyfills.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made by [Axshul](https://github.com/Axshul)

</div>

---