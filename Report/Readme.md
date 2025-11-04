# **SOFTWARE ENGINEERING REPORT**

## **Project Title:**

**Dynamic GitHub Portfolio Website**

---

## **1. Problem Statement**

In modern development, maintaining a personal portfolio manually becomes inefficient as projects grow. Static websites require frequent edits whenever new repositories are added or updated, which leads to redundancy and inconsistency.

This project solves that issue by **creating a dynamic portfolio website that fetches real-time repository data directly from GitHub’s REST API**. The website displays repositories, their descriptions, and relevant links automatically, making portfolio management seamless and self-updating.

![Portfolio Landing Page Placeholder](assets/portfolio-homepage.png)

---

## **2. Objectives**

The key goals of the project are:

1. To design a **dynamic and responsive portfolio website** using HTML, CSS, and JavaScript.
2. To integrate the **GitHub REST API** for fetching live repository data.
3. To **automate repository listing** — including project names, descriptions, and live demo links.
4. To implement a clean, minimal UI with consistent structure and fast loading time.
5. To apply SDLC methodology systematically — from planning to deployment.

![Project Mockup Placeholder](assets/project-mockup.png)

---

## **3. Requirements**

### **Software Requirements**

* **Operating System:** Windows 10 / macOS / Linux
* **IDE / Editor:** Visual Studio Code
* **Browser:** Google Chrome / Edge / Firefox
* **Design Tool:** Figma
* **Version Control:** Git & GitHub
* **API:** GitHub REST API v3
* **Deployment:** GitHub Pages

### **Hardware Requirements**

* **Processor:** Intel i3 or above
* **RAM:** Minimum 4 GB
* **Storage:** 500 MB free space
* **Internet:** Required for API access and deployment

### **Libraries / Tools Used**

* HTML5, CSS3, JavaScript (ES6)
* Axios or Fetch API
* Git & GitHub
* Figma

---

## **4. Languages Used**

| Language / Framework | Purpose                            |
| -------------------- | ---------------------------------- |
| **HTML5**            | Page structure                     |
| **CSS3**             | Styling, responsiveness            |
| **JavaScript (ES6)** | API handling and dynamic rendering |
| **JSON**             | Data format for API response       |

---

## **5. Phases of SDLC**

### **Phase 1 – Planning**

The planning phase focused on aligning the project idea with clear, functional outcomes.
**Core Planning Tasks:**

* Identify the need for a self-updating portfolio.
* Define user group — recruiters, collaborators, and visitors.
* Plan API integration to fetch repositories dynamically.
* Choose technologies (HTML, CSS, JS, GitHub REST API).
* Design a simple, responsive card-based interface.
* Establish version control through Git and GitHub.

![Planning Phase Placeholder](assets/planning-phase.png)

---

### **Phase 2 – Requirements**

#### **Functional Requirements**

* Fetch repository data using GitHub REST API.
* Display data as project cards with titles and descriptions.
* Include buttons for "View Code" and "View Page" if available.
* Update dynamically when repositories are added.

#### **Non-Functional Requirements**

* Load time under 3 seconds.
* Responsive and accessible UI.
* Maintainable and modular codebase.
* Cross-browser compatibility.

![Requirements Placeholder](assets/requirements.png)

---

### **Phase 3 – Architecture**

The project follows the **Waterfall SDLC model**, ideal for solo projects with well-defined goals.
Each stage — from planning to maintenance — is completed before moving to the next, ensuring structural clarity.

**System Overview:**

* **Frontend:** HTML, CSS, JavaScript
* **API Layer:** GitHub REST API
* **Data Flow:**
  User → Portfolio Website → GitHub API → JSON Data → DOM Rendering
* **Deployment:** GitHub Pages

**Why Waterfall Model?**
Because requirements were static and no frequent iteration was needed.

![SDLC Waterfall Diagram Placeholder](assets/sdlc-waterfall.png)

---

### **Phase 4 – Design**

Designing began with Figma wireframes that mapped out the layout and component structure.

**Design Highlights:**

* Minimal and clean theme with high contrast and modern typography.
* Responsive grid-based layout for repositories.
* Smooth scrolling and section transitions.
* Consistent color palette and visual hierarchy.

**Artifacts:**

* **Wireframes:** Home, About, Projects section
* **Typography:** Poppins / Roboto
* **Color Scheme:** Light theme with dark text and blue highlights
* **Icons:** SVG for scalability

![Final UI Placeholder](assets/final-ui.png)
![Navigation Placeholder](assets/navigation.png)

---

### **Phase 5 – Development & Deployment**

#### **Development Process**

* HTML structure created first.
* CSS applied for styling and responsiveness.
* JavaScript implemented for data fetching and rendering.
* Used **Fetch API** to pull JSON data from GitHub (`https://api.github.com/users/{username}/repos`).
* Conditional rendering used for “View Page” button — only visible if GitHub Pages exists for a repo.
* Each repository represented as a responsive card.

**Testing Included:**

* Functionality check of API response.
* Browser testing (Chrome, Firefox, Edge).
* Responsive design validation.
* Error handling for failed API calls.

![Code Snippet Placeholder](assets/code-snippet.png)
![Testing Placeholder](assets/testing.png)

#### **Deployment**

* Deployed through **GitHub Pages** from the main branch.
* Repository auto-updates ensure the live site stays current.
* Continuous deployment achieved via GitHub integration.
* Accessible via: `https://<your-username>.github.io/`

![GitHub Pages Settings Placeholder](assets/github-pages.png)
![Live Website Screenshot Placeholder](assets/live-website.png)

---

## **6. Conclusion**

The **Dynamic GitHub Portfolio Website** demonstrates a structured implementation of SDLC principles to create a scalable, self-updating personal portfolio.
By automating repository management and displaying real-time updates, the system reduces maintenance while maintaining professional presentation.

**Future Enhancements:**

* Add dark/light mode toggle.
* Implement project filtering by tags (e.g., Web, ML, Automation).
* Integrate visit analytics.
* Optional integration with GitHub GraphQL API for advanced data insights.
