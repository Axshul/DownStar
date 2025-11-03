<div align="center">

# ⭐ DownStar

### The Next Generation Web Components Library

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Axshul/DownStar/issues)
[![GitHub Stars](https://img.shields.io/github/stars/Axshul/DownStar.svg)](https://github.com/Axshul/DownStar/stargazers)

*Elevate your web projects with zero-dependency, plug-and-play components.*

[Documentation](#documentation) • [Components](#components) • [Quick Start](#quick-start) • [Contribute](#contribute)

</div>

## 🚀 Overview

DownStar revolutionizes web development by providing a suite of modern, lightweight components that can be integrated into any project with a single line of code. Powered by GitHub Pages, it's both powerful and completely free.

### ✨ Key Features

- **Zero Dependencies** - Pure vanilla JavaScript components
- **Instant Integration** - Single script tag implementation
- **Modern Design** - Sleek, responsive components out of the box
- **Performance First** - Lightweight and optimized for speed
- **Developer Friendly** - Extensive documentation and examples

## 🎯 Quick Start

Add powerful components to your website in seconds:

```html
<!-- Add Toast Notifications -->
<script src="https://Axshul.github.io/DownStar/toast/Call.js"></script>
```

```javascript
// Show a toast notification
Toast.show("Welcome to the future! 🚀");
```

## 📦 Components

Our growing library of components includes:

### Available Now
- 🔔 Toast Notifications
  - Customizable alerts
  - Multiple positions
  - Animation options

### Coming Soon
- 🎨 Modal Dialogs
- 🔲 Floating Action Buttons
- 🚨 Alert Banners
- 🛠️ Utility SDKs

## ⚡ Integration Methods

DownStar offers two integration methods to suit different needs:

### 1. Production Mode (Recommended for End Users)
Single-file bundle for optimal performance:
```html
<script src="https://axshul.github.io/DownStar/toast/Toast.bundle.js"></script>
```
- ✅ Faster loading
- ✅ Single network request
- ✅ Production optimized
- ✅ Minified code

![Screenshot Placeholder](src/Production-Mode_Visual.svg)

### 2. Developer Mode (For Customization)
Modular loading for development and customization:
```html
<script src="https://axshul.github.io/DownStar/toast/Call.js"></script>
```
- ✅ Separate logic and styles
- ✅ Easy to modify
- ✅ Great for learning
- ✅ Perfect for contributing

![Screenshot Placeholder](src/DEV_FINALVisual.svg)


## � CDN & Hosting (GitHub Pages + jsDelivr)

DownStar is hosted via GitHub Pages (user page: `https://axshul.github.io/DownStar`) and globally distributed through the jsDelivr CDN. This gives you three convenient ways to consume modules depending on your needs.

| Mode | URL example | Description |
|------|-------------|-------------|
| Development | `https://axshul.github.io/DownStar/toast/Call.js` | Loads `Logic.js` + `Styles.css` via the module loader — editable and readable (dev-friendly). |
| Production | `https://axshul.github.io/DownStar/toast/Toast.bundle.js` | Single-file bundle hosted on GitHub Pages — optimized for production use. |
| CDN (jsDelivr) | `https://cdn.jsdelivr.net/gh/Axshul/DownStar@latest/toast/Toast.bundle.js` | Fast, globally cached delivery via jsDelivr — recommended for public sites. |na

### jsDelivr URL formats (examples)

- Latest (auto-updating):
   `https://cdn.jsdelivr.net/gh/Axshul/DownStar@latest/toast/Toast.bundle.js`
- Version-specific (recommended for stable releases):
   `https://cdn.jsdelivr.net/gh/Axshul/DownStar@v1.0.0/toast/Toast.bundle.js`

> Tip: Tag stable releases in GitHub (e.g., `v1.0.0`) and reference the versioned jsDelivr URL to ensure cached, immutable files for production.

### Quick usage examples

Development (editable):
```html
<script src="https://axshul.github.io/DownStar/toast/Call.js"></script>
<script>
   Toast.show("Hello, Dev Mode! 👨‍💻");
</script>
```

Production (single-file bundle):
```html
<script src="https://axshul.github.io/DownStar/toast/Toast.bundle.js"></script>
<script>
   Toast.show("Hello from DownStar 🚀");
</script>
```

CDN (recommended for public sites):
```html
<script src="https://cdn.jsdelivr.net/gh/Axshul/DownStar@latest/toast/Toast.bundle.js"></script>
<script>
   Toast.show("Hello from CDN-loaded DownStar 🌍");
</script>
```

### Versioning & Release workflow (short)

1. Commit module code to `main`.
2. When ready, create a GitHub Release and tag (e.g., `v1.0.0`).
3. Use the versioned jsDelivr URL in production to get immutable cached assets.

This setup gives you fast global delivery (jsDelivr) plus the simplicity of GitHub Pages hosting for development and demos.


## �🏗️ Architecture

Each DownStar module follows a hybrid architecture that supports both production and development needs:

```
module-name/
├── Logic.js          # Core functionality
├── Styles.css        # Component styling
├── Call.js          # Development mode loader
└── Module.bundle.js  # Production-ready bundle
```

### Why Hybrid Architecture?

Our hybrid approach offers the best of both worlds:

| Feature | Production Mode | Developer Mode |
|---------|----------------|----------------|
| Network Requests | Single request | Multiple modular requests |
| File Size | Optimized bundle | Separated files |
| Customization | Ready to use | Fully customizable |
| Use Case | Live websites | Development/Learning |

## 🗂️ Project Structure

```
DownStar/
├── toast/                # Toast notification module
│   ├── Logic.js         # Core functionality
│   ├── Styles.css       # Component styling
│   ├── Call.js         # Developer mode loader
│   └── Toast.bundle.js  # Production bundle
├── modal/                # Modal dialog module
│   ├── Logic.js         # Core functionality
│   ├── Styles.css       # Component styling
│   ├── Call.js         # Developer mode loader
│   └── Modal.bundle.js  # Production bundle
├── index.html           # Documentation & demos
└── README.md            # Project documentation
```

Each module maintains both development files and a production-ready bundle to support our hybrid architecture.

## � Philosophy

DownStar is built on three foundational principles:

1. **Plug & Play**
   - No build steps
   - No package managers
   - Just pure web power

2. **Open & Free**
   - MIT Licensed
   - Hosted on GitHub Pages
   - Community driven

3. **Developer First**
   - Extensive documentation
   - Modular architecture
   - Easy to extend

## 🤝 Contribute

We welcome contributions from developers of all skill levels!

1. Fork the repository
2. Create your feature branch
3. Add your component (Logic.js, Styles.css, Call.js)
4. Submit a pull request

See our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## 📄 License

DownStar is [MIT licensed](LICENSE) and free for both personal and commercial use.

<div align="center">

## 🌟 Author

**Anshul Namdev (Axshul)**

[![GitHub](https://img.shields.io/badge/GitHub-%40Axshul-blue?style=flat-square&logo=github)](https://github.com/Axshul)

*Built with ❤️ for the modern web*

</div>