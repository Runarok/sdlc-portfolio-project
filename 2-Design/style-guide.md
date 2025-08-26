# 🎨 Style Guide – GitHub Portfolio Generator

**Project:** GitHub Portfolio Generator  
**Author:** Runarok  
**Phase:** Designing  
**Last Updated:** August 26, 2025

---

## 🧭 Overview

This style guide defines the **visual identity**, layout behavior, and supporting assets for the GitHub Portfolio project. It documents how the interface was designed and tested visually using Figma, ensuring alignment with SDLC design principles and developer expectations.

---

## 📁 Files in This Folder

| **Filename**             | **Purpose**                                                                 |
|--------------------------|------------------------------------------------------------------------------|
| `style-guide.md`         | The document you're reading – design guide and references.                  |
| `All Varients.h2d`       | Figma-ready design file with all display resolutions and layout variants.   |
| `Browser.h2d`            | High-resolution (2150x1080) variant tailored to the primary dev environment.|
| `Github Runarok.png`     | PNG snapshot of the portfolio design (for presentations or documentation).   |
| `Github Runarok.svg`     | Vector export of the design – scalable and ideal for reports or demos.       |

---

## 🛠️ Design Workflow

Designs were built and iterated in **Figma**, using imported HTML via the `HTML to Design` plugin:

- ✅ Easily convert existing HTML + CSS into Figma layers
- ✅ Test responsiveness and UI consistency visually
- ✅ Maintain design-to-code alignment across iterations

### Plugin Details

- 📦 **Plugin Name:** HTML to Design
- 🌐 **Website:** [https://html.to.design](https://html.to.design)
- 🧩 **Documentation:** [https://docs.html.to.design/](https://docs.html.to.design/)
- 🛍️ **Chrome Extension (Import/Export .h2d):**  
  [HTML to Design - Chrome Web Store](https://chromewebstore.google.com/detail/htmltodesign/ldnheaepmnmbjjjahokphckbpgciiaed)

---

## 📱 Responsiveness

Design variants are created and tested across standard breakpoints:

| **Device Type** | **Resolution** | **Included In**          |
|------------------|----------------|----------------------------|
| Mobile           | 375x667        | `All Varients.h2d`         |
| Tablet           | 768x1024       | `All Varients.h2d`         |
| Laptop/Desktop   | 1366x768+      | `All Varients.h2d`         |
| Ultra-Wide       | 2150x1080      | `Browser.h2d`              |

To import `.h2d` files into Figma:

1. Install the HTML to Design plugin in Figma  
2. Open the plugin → click `Import from file`  
3. Upload `.h2d` and select your device layout

- [Import h2d to Figma](https://html.to.design/docs/open-h2d-file)

---

## 🌟 Key Visual Features

- 🎨 **5 Beautiful Themes**  
  Dark, Light, Purple, Ocean, and Forest — toggleable via the UI

- 📱 **Fully Responsive**  
  Smooth layouts across all screen sizes

- ⚡ **GitHub API Integration**  
  Live data rendered from GitHub using REST API

- 🎯 **Modern Design**  
  Includes glassmorphism effects, soft shadows, and transitions

- 🚀 **Fast Performance**  
  Lazy loading, minimized requests, and session caching

- ♿ **Accessible Design**  
  Keyboard-friendly and WCAG-compliant layout

- 🔍 **Repository Search**  
  Built-in repo filter to explore your work easily

---

## 🧑‍💻 Technical Enhancements

These design-driven optimizations improve the UI experience:

- Lazy loading for avatars and images
- Efficient session caching to reduce GitHub API usage
- Optimized CSS animations for smooth interaction
- Minimal JavaScript footprint (no frameworks used)
- All dependencies loaded via CDN for faster load times

---

## 🔗 Additional References

- 🔧 [Figma](https://figma.com) – Design editor used for prototyping
- 📘 [GitHub REST API Docs](https://docs.github.com/en/rest)
- 🧪 [Testing Documentation](../Testing/test-cases.md)
- 🚀 [Deployment Guide](../Deployment/deployment-instructions.md)

---

> _This document supports the "Design" phase in the SDLC process.  
Any future UI or UX enhancements should be reflected in updated `.h2d`, `.png`, and `.svg` files._