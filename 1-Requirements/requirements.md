# 📋 Requirements Specification – GitHub Portfolio Project

**Project Name:** GitHub Portfolio Generator  
**Author:** Runarok  
**Phase:** Requirements  
**Last Updated:** August 26, 2025

---

## ✅ 1. Functional Requirements

These outline the core **features and behaviors** the system must implement.

| **ID**    | **Requirement**          | **Description**                                                                                     | **Priority** |
| --------- | ------------------------ | --------------------------------------------------------------------------------------------------- | ------------ |
| FR-1      | Fetch GitHub Profile     | Use the GitHub REST API to retrieve user profile details (e.g., name, avatar, followers, bio).     | High         |
| FR-2      | Fetch Repositories       | Retrieve all public repositories for a specified GitHub username.                                  | High         |
| FR-3      | Display Profile Info     | Dynamically render the user’s GitHub profile (avatar, name, bio, location, followers).             | High         |
| FR-4      | Display Repositories     | Render repositories in card format showing name, description, language, stars, and link.           | High         |
| FR-5      | Live GitHub Links        | Include working links to GitHub profile and repositories.                                           | Medium       |
| FR-6      | Configurable Username    | Enable username configuration via a constant in `config.js`.                                       | High         |
| FR-7      | Error Handling           | Display user-friendly errors for invalid usernames or API failures.                                | Medium       |
| FR-8      | API Rate-Limit Handling  | Handle GitHub API rate limit and show informative feedback to the user.                            | Low          |
| FR-9      | JSON-Based Rendering     | Use dynamic rendering from API JSON data without hardcoded HTML content.                           | High         |
| FR-10     | Responsive UI Rendering  | Ensure data is displayed in a clean, responsive layout for various screen sizes.                   | High         |

---

## ⚙️ 2. Non-Functional Requirements

These define the **quality attributes** and technical constraints of the application.

| **ID**     | **Requirement**             | **Description**                                                                           | **Priority** |
| ---------- | --------------------------- | ----------------------------------------------------------------------------------------- | ------------ |
| NFR-1      | Responsiveness              | Portfolio must be responsive across mobile, tablet, and desktop.                         | High         |
| NFR-2      | Performance                 | Pages should load within 2 seconds on average internet speeds.                           | Medium       |
| NFR-3      | Cross-Browser Compatibility | Must function on major browsers: Chrome, Firefox, and Edge.                              | Medium       |
| NFR-4      | Minimal Dependencies        | Use only vanilla HTML, CSS, and JS (CDNs allowed). No frameworks (e.g., React, jQuery).  | High         |
| NFR-5      | API Efficiency              | Cache API responses in `sessionStorage` to reduce calls and improve UX.                  | Medium       |
| NFR-6      | Accessibility               | Use semantic HTML and appropriate ARIA/alt attributes.                                   | Medium       |
| NFR-7      | Maintainability             | Maintain modular code with separate files for each concern (HTML, CSS, JS).              | Medium       |
| NFR-8      | SEO-Friendly                | Include proper metadata and titles to support search visibility.                         | Low          |
| NFR-9      | Reliability                 | Fallback or placeholder content should display when API fails or returns incomplete data.| Medium       |
| NFR-10     | Aesthetics                  | UI must be modern, clean, and visually prioritize GitHub data.                           | Medium       |

---

## ✅ 3. Acceptance Criteria

For this project to be accepted as **complete**, the following criteria must be met:

- [x] GitHub username can be easily changed in `config.js`.
- [x] GitHub API is used to fetch **live profile and repo data**.
- [x] API data is rendered **dynamically** into HTML.
- [x] UI is **responsive** and displays user/repo data in a clean layout.
- [x] Proper **error handling** is in place for API failures and limits.
- [x] Project is deployed and **publicly accessible** via GitHub Pages.

---

## 🔗 4. References

- 📘 [GitHub REST API Documentation](https://docs.github.com/en/rest)
- 🎨 [Design Documentation](../Design/design.md)
- 🧪 [Testing Plan](../Testing/test-cases.md)
- 🚀 [Deployment Guide](../Deployment/deployment-instructions.md)
- 🌐 [Live Portfolio Demo](https://runarok.github.io/sdlc-portfolio-project)

---

> _This requirements document is part of the SDLC documentation for the GitHub Portfolio Generator project._
