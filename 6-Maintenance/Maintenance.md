# 🛠️ Maintenance

**Project Name:** GitHub Portfolio Generator  
**Author:** Runarok  
**Phase:** Planning  
**Last Updated:** August 26, 2025

To make the project easier to manage and maintain, the CSS and JavaScript files have been organized and separated based on their specific purposes. This modular structure simplifies updating, debugging, and extending the project without dealing with one large monolithic file.

---

## 💅 CSS Files

Each CSS file targets a distinct part of the site’s styling:

- **`base.css`** – Contains foundational styles such as resets, typography, and overall layout structure.  
- **`themes.css`** – Manages light, dark, and other color theme variations.  
- **`navigation.css`** – Styles the navigation bar and related components.  
- **`hero.css`** – Handles the main hero section’s appearance at the top of the page.  
- **`repositories.css`** – Applies styles specifically for the repositories or projects section.  
- **`footer.css`** – Contains styling rules for the footer area.  
- **`responsive.css`** – Includes media queries and responsive adjustments for different screen sizes and devices.

---

## 📜 JavaScript Files

JavaScript files are also segmented by functionality for clarity and maintainability:

- **`config.js`** – Stores global configuration variables and constants used throughout the site.  
- **`cache.js`** – Implements caching logic to store API data temporarily, improving performance and reducing API calls.  
- **`theme.js`** – Controls theme toggling functionality (e.g., switching between light and dark modes).  
- **`api.js`** – Handles communication with external APIs, mainly fetching data from GitHub.  
- **`ui.js`** – Manages UI-related interactions such as animations, modal toggling, and dynamic content rendering.  
- **`main.js`** – The primary script that initializes the application and orchestrates the interaction between modules.

---

## 📱 Known Limitations

- There is a minor known issue with very small screen widths (≤ 400px) where some navigation elements may not be fully visible.
- This limitation has been documented in the bug report and will be addressed if future demand justifies it.

---