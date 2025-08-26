## **1. Functional Requirements**

These are the **core features** required to make the GitHub-driven portfolio functional.

| **ID**    | **Requirement**          | **Description**                                                                                     | **Priority** |
| --------- | ------------------------ | --------------------------------------------------------------------------------------------------- | ------------ |
| **FR-1**  | Fetch GitHub Profile     | Use the **GitHub REST API** to fetch user profile details (name, username, bio, avatar, followers). | High         |
| **FR-2**  | Fetch Repositories       | Retrieve the list of **public repositories** for the given username.                                | High         |
| **FR-3**  | Display Profile Info     | Dynamically display profile details like **name, avatar, bio, followers, following, and location**. | High         |
| **FR-4**  | Display Repositories     | Show repository cards with **repo name, description, language, stars, and links**.                  | High         |
| **FR-5**  | Live GitHub Links        | Add clickable links to the user's **GitHub profile**, repos, and social links if available.         | Medium       |
| **FR-6**  | Configurable Username    | Allow easy **username configuration** via a single constant in `script.js` (no backend).            | High         |
| **FR-7**  | Error Handling           | Show a **friendly error message** if the username is invalid or the API request fails.              | Medium       |
| **FR-8**  | API Rate-Limit Handling  | Handle GitHub API limits gracefully with an **informative message** when the limit is reached.      | Low          |
| **FR-9**  | JSON-Like Data Rendering | Fetch and **dynamically map** API JSON data into HTML elements without manually editing content.    | High         |
| **FR-10** | Responsive UI Rendering  | Render all fetched data within a **responsive HTML/CSS layout**.                                    | High         |

---

## **2. Non-Functional Requirements**

These define the **quality attributes** of the project.

| **ID**     | **Requirement**             | **Description**                                                                           | **Priority** |
| ---------- | --------------------------- | ----------------------------------------------------------------------------------------- | ------------ |
| **NFR-1**  | Responsiveness              | The portfolio must be **fully responsive** on mobile, tablet, and desktop.                | High         |
| **NFR-2**  | Performance                 | The portfolio must **load within 2 seconds** on average internet speeds.                  | Medium       |
| **NFR-3**  | Cross-Browser Compatibility | Must work seamlessly on **Chrome, Edge, and Firefox**.                                    | Medium       |
| **NFR-4**  | Minimal Dependencies        | Use **only HTML, CSS, and JS** (via CDN links) — **no frameworks** or heavy libraries.    | High         |
| **NFR-5**  | API Efficiency              | Cache API results locally in the browser using **sessionStorage** to minimize API calls.  | Medium       |
| **NFR-6**  | Accessibility               | Use **semantic HTML** and **alt attributes** for profile images.                          | Medium       |
| **NFR-7**  | Maintainability             | Keep the code modular with **separate files** for HTML, CSS, and JS.                      | Medium       |
| **NFR-8**  | SEO-Friendly                | Use proper **meta tags** and titles for better discoverability.                           | Low          |
| **NFR-9**  | Reliability                 | Display placeholder data if API responses fail or return incomplete data.                 | Medium       |
| **NFR-10** | Aesthetics                  | Follow a **clean, modern, and minimalistic design** focused on GitHub data visualization. | Medium       |

---

## **3. Acceptance Criteria**

For the project to be considered **complete**:

* ✅ A GitHub username can be configured easily in `script.js`.
* ✅ Profile and repositories are fetched **dynamically** from the **GitHub API**.
* ✅ The UI is **responsive** and **cleanly displays API data**.
* ✅ All **functional requirements** are implemented and tested.
* ✅ The website is deployed via **GitHub Pages** and publicly accessible.

---

## **4. References**

* [GitHub REST API Docs](https://docs.github.com/en/rest)
* [Project Design Plan](design.md)
* [Testing Documentation](testing.md)
* [Deployment Steps](deployment.md)
* [Live Portfolio Demo](https://github.com/Runarok/sdlc-portfolio-project)

---
