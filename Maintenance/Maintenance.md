# 🛠️ Maintenance

To make my project easier to manage and maintain, I separated both the CSS and JavaScript files based on their purpose. This makes it simpler to update or debug specific parts of the project without having to go through one large file.

### 💅 CSS Files:

Each CSS file handles a different part of the layout or styling:

* **`base.css`** – Contains the basic styles (reset styles, typography, and overall structure).
* **`themes.css`** – Manages light/dark themes or color variations.
* **`navigation.css`** – Styles only the navigation bar and its elements.
* **`hero.css`** – Styles the main hero section at the top of the page.
* **`repositories.css`** – Handles the design of the repositories/projects section.
* **`footer.css`** – Contains styling specific to the footer section.
* **`responsive.css`** – Includes media queries to make the layout responsive across different devices.

### 📜 JavaScript Files:

Similarly, I split up the JavaScript files by functionality:

* **`config.js`** – Stores configuration variables or settings used throughout the site.
* **`cache.js`** – Manages caching logic (e.g., storing data temporarily to improve performance).
* **`theme.js`** – Controls theme switching (like dark/light mode toggle).
* **`api.js`** – Handles API calls (e.g., fetching data from GitHub).
* **`ui.js`** – Manages UI interactions like opening/closing elements or animations.
* **`main.js`** – The main script that initializes everything and ties all logic together.

This modular structure makes it much easier to locate and work on specific areas, whether it's styling or logic.

---

## 📱 Small Screen Issue

While testing, I did notice that **on very small phone screens**, the top navigation bar isn’t fully visible. I chose not to address this in detail because:

* It only affects **very small or uncommon devices**.
* **Regular smartphones and browsers work perfectly**.
* Fixing it would require adding extra styles or scripts that aren’t necessary for the majority of users.

So instead of fixing something that won't impact real usage, I focused on keeping the code clean and optimized for most screen sizes.

---

