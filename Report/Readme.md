# Software Engineering (SDLC) Project Report

*This report documents the complete software development lifecycle (SDLC) process undertaken for the personal portfolio website repository [Runarok/sdlc-portfolio-project](https://github.com/Runarok/sdlc-portfolio-project).*

---

## 1. Problem Statement

The project seeks to address the challenge faced by students and early-career professionals in showcasing their skills, achievements, and projects through a credible personal portfolio website. Despite the availability of generic website builders, many lack customization, fail to integrate interactive elements, and fall short in demonstrating hands-on software engineering skills. Career portals and social platforms (like LinkedIn, Behance) do not provide fine-grained control or the ability to simulate or document SDLC practices. 

**Context:**  
- Primary users: Students, recent graduates, freelance professionals  
- Limitations of existing solutions: Limited customization, no proper skill demonstration, lack of version control integration, inadequate for technical showcasing  
- Gap addressed by this project:  
    - A portfolio site built from scratch using modern web technologies  
    - Implements best practices of SDLC  
    - Allows advanced customization and interactivity  
    - Serves as a live demonstration of personal development capabilities

---

## 2. Objectives

1. **Develop a fully functional portfolio website** that presents the user's skills, educational background, and project history.
2. **Integrate interactive modules** (e.g., project galleries, contact forms) to enhance user engagement.
3. **Ensure responsive design** for optimal usability across devices (desktop, tablet, mobile).
4. **Automate deployment** and update processes using modern web development tooling.
5. **Enhance user experience** by implementing intuitive navigation and visually appealing layouts.
6. **Maintain code quality and documentation** adhering to professional software engineering standards.

---

## 3. Requirements

### 3.1 Functional Requirements

- Website must display personal details (bio, education, skills).
- Sections for project portfolios, achievements, and contact information.
- Interactive elements: project filtering, contact form with validation, downloadable resume.
- Responsive design for different screen sizes.
- Integration with social profiles and external links.
- Administrative module (optional) for easy site updates (add/edit projects, change profile details).
- Search or filter functionality for projects/skills.

### 3.2 Non-functional Requirements

- Fast page load (<2s on broadband connection).
- Robust security for user data and contact form (basic spam protection, no sensitive data stored).
- Scalability for future components (blog, testimonials).
- Accessibility standards compliance (WCAG 2.1).
- Cross-browser compatibility (Chrome, Firefox, Safari, Edge).
- Maintainable and well-documented codebase.

### 3.3 Hardware, Software, APIs, Libraries, Data Sources

- **Hardware:** Standard client devices (user-facing) and development hardware (PC/laptop).
- **Software:**  
    - OS: Windows/macOS/Linux (for development and deployment)  
    - Web server: Nginx/Apache or static hosting (GitHub Pages/Netlify)
- **Programming Languages:** CSS, JavaScript, HTML
- **APIs/Libraries:**  
    - [Bootstrap](https://getbootstrap.com) or custom CSS frameworks (UI layout, responsiveness)  
    - [Font Awesome](https://fontawesome.com) (icon assets)
- **Data Sources:**  
    - Static JSON or local data files for portfolio entries, skills, achievements
    - Email API (e.g., EmailJS, Formspree) for contact form submissions (optional)

---

## 4. Languages Used

- **HTML:**  
    - Chosen for semantic structure and universal web compatibility.
- **CSS:**  
    - Used for custom styling and responsive layouts. Enables consistent visual design and separation of concerns.
- **JavaScript:**  
    - Provides interactivity, DOM manipulation, and dynamic feature integration (e.g., project filters, form validation).  
- **Framework/Tooling (optional):**
    - Bootstrap: For rapid UI prototyping and grid-based layouts.
    - Font Awesome: For scalable vector icons.

*Justification:*  
The stack prioritizes simplicity, universal browser support, and a clear demonstration of core web development skills suitable for a portfolio context and SDLC simulation.

---

## 5. Phases of SDLC

### 5.1 Planning

- **Idea Formulation:** Develop a portfolio site that demonstrates both technical ability and SDLC methodology.
- **Feasibility Study:** Analyze existing solutions, define target users (students, professionals), assess available resources (free hosting, readily available web frameworks).
- **Target Users:** Individuals seeking to showcase their projects and skills online.
- **Feature Set:** Personal info, project highlights, skills, contact form, downloadable resume, interactive galleries.
- **Task Allocation:** Assign tasks (UI design, backend logic [if applicable], documentation, testing, deployment).
- **Risk Assessment:**  
    - Scope creep due to feature additions  
    - Compatibility issues (browser/device differences)  
    - Security vulnerabilities (contact form spam)

*Planning assets:*  
- [Project Plan Example (add your plan at ./assets/planning.pdf)](./assets/planning.pdf)
- [Persona Profile (add at ./assets/persona-profile.png)](./assets/persona-profile.png)

---

### 5.2 Requirements

- **Requirements Analysis:** Collect user stories (e.g., “as a student, I want to showcase my work”).
- **Data Collection:** Gather sample portfolio entries, images, certifications.
- **Use-Case Identification:** Define main use cases: browsing portfolio, submitting contact form, downloading resume.
- **System Goals:** High engagement, ease of content updates, effective skill presentation.

*Requirements assets:*  
- [Use Case Diagram (add at ./assets/usecase-diagram.png)](./assets/usecase-diagram.png)
- [Requirements Specification (add at ./assets/requirements-spec.md)](./assets/requirements-spec.md)

---

### 5.3 Architecture

- **SDLC Model Chosen:** Agile Model
    - *Justification:* Agile fits well for iterative improvement, user feedback incorporation, and flexible requirements in a personal project context. Enables frequent testing and quick adaptation to new ideas.
    - *Iteration:* Small, incremental builds (e.g., releasing MVP, then adding new features).
    - *Testing Approach:* Continuous integration, regular manual testing after each iteration.
    - *Scalability:* Modular development allows future expansion (blog, testimonials, admin module).

*Architecture assets:*  
- [SDLC Model Rationale (add at ./assets/sdlc-model-justification.pdf)](./assets/sdlc-model-justification.pdf)

---

### 5.4 Design

- **Conceptual Design:** Layout mockups, component breakdowns, and UI/UX flow.
- **Technical Design:** Folder structure, data flow, integration points (APIs/external libraries).
- **Diagrams:**  
    - Wireframes for homepage, portfolio gallery, contact page  
    - ER Diagram (if data handled beyond static files)
    - Flowchart/DFD illustrating how data/processes flow between components

*Design assets:*  
- [Homepage Wireframe (add at ./assets/homepage-wireframe.png)](./assets/homepage-wireframe.png)
- [Portfolio ER Diagram (add at ./assets/portfolio-er-diagram.png)](./assets/portfolio-er-diagram.png)
- [Process Flowchart (add at ./assets/process-flowchart.png)](./assets/process-flowchart.png)

**Explanation:**  
- Data flow: portfolio entries read from local JSON/static files, filtered by JS and rendered dynamically.
- Component interaction: navigation controls update main content area, form submissions sent to configured API.

---

### 5.5 Development & Deployment

- **Implementation:**  
    - Developed using modular HTML/CSS/JS files.  
    - Created core modules: Home, Portfolio, About, Contact.  
    - Integrated UI framework (Bootstrap or custom grid).  
    - Added interactivity with JS (e.g., filtering, popup display, form validation).
- **Testing Performed:**  
    - Manual browser and device testing  
    - Automated validation (e.g., HTML/CSS validators)
    - User acceptance testing (feedback from peers/instructors)
- **Debugging:**  
    - Browser dev tools, JS error tracking, responsive checks
- **Integration:**  
    - Combined individual UI components, ensured consistent styling and navigation.
- **Deployment:**  
    - **Environment:** Deployed on [GitHub Pages](https://pages.github.com/) for ease, or Netlify as alternative (local for development; cloud as production).
    - Steps: code push to repository, trigger build/deploy pipeline, verify public access.

*Deployment assets:*  
- [Deployment Guide (add at ./assets/deployment-guide.pdf)](./assets/deployment-guide.pdf)
- [Testing Checklist (add at ./assets/testing-checklist.md)](./assets/testing-checklist.md)
- [Live Site Screenshot (add at ./assets/screenshot-live.png)](./assets/screenshot-live.png)

---

## [Appendices]

- Links to additional references, test logs, and future work plans.

---

*Prepared by: Runarok (GitHub: [Runarok/sdlc-portfolio-project](https://github.com/Runarok/sdlc-portfolio-project))*
