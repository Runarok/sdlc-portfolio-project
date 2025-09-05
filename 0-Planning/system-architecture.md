# **Actors for SDLC Portfolio**

### **Primary Actors**

* **Visitor (End User)** → Anyone viewing your portfolio.
* **Admin / Developer (You)** → Builds, maintains, and updates the portfolio.
* **CI/CD Pipeline (GitHub Actions)** → Automates build, test, and deployment.
* **Hosting Platform (GitHub Pages / Vercel / Netlify)** → Serves the live portfolio.

### **Secondary Actors**

* **Version Control System (GitHub Repo)** → Stores source code, manages commits, branches, and releases.
* **External API(s)** → GitHub API, analytics, or any integrated service that feeds live stats.
* **Authentication Service** → GitHub authentication for secure commits and deployments.
* **User’s Browser** → Renders the frontend and triggers API calls.

---

# **UML Use Case Diagram**

```mermaid
graph TD
    %% Actors
    V([Visitor])
    A([Admin / Developer])
    G([GitHub Repo])
    C([CI/CD Pipeline])
    H([Hosting Platform])
    E([External API])

    %% Visitor Actions
    V -->|"View Portfolio"| H
    V -->|"Fetch Live Data"| E

    %% Admin Actions
    A -->|"Update Source Code"| G
    A -->|"Commit & Push Changes"| G
    A -->|"Manage Branches"| G

    %% GitHub Integration
    G -->|"Trigger Build & Deploy"| C
    C -->|"Deploy Updated Site"| H
    H -->|"Serve Portfolio"| V

    %% API Integration
    E -->|"Provide Repos & Stats"| H
```

---

# **UML Activity Diagram (SDLC Workflow + User Flow)**

```mermaid
flowchart TD
    Start([Start])
    Dev[/"Admin develops or updates portfolio"/]
    Commit["Commit & Push to GitHub"]
    CI["CI/CD Pipeline runs (GitHub Actions)"]
    Build["Build frontend & run tests"]
    Deploy["Deploy to GitHub Pages / Hosting"]
    LiveSite["Portfolio Live & Accessible"]
    UserVisit["Visitor accesses portfolio"]
    FetchAPI["Fetch dynamic data from APIs"]
    Display["Render updated content"]
    End([End])

    Start --> Dev
    Dev --> Commit
    Commit --> CI
    CI --> Build
    Build --> Deploy
    Deploy --> LiveSite
    LiveSite --> UserVisit
    UserVisit --> FetchAPI
    FetchAPI --> Display
    Display --> End
```

---

# **UML Sequence Diagram (Live Data + CI/CD)**

```mermaid
sequenceDiagram
    participant Visitor
    participant Browser
    participant PortfolioWeb
    participant GitHubAPI
    participant Admin as "Admin / Developer"
    participant GitHub as "GitHub Repo"
    participant CI as "CI/CD Pipeline"
    participant Hosting as "Hosting Platform"

    Visitor->>Browser: Open Portfolio URL
    Browser->>PortfolioWeb: Request static assets
    PortfolioWeb->>GitHubAPI: Fetch dynamic repos/stats
    GitHubAPI-->>PortfolioWeb: Send JSON response
    PortfolioWeb->>Visitor: Render portfolio + live data

    Admin->>GitHub: Push code updates
    GitHub->>CI: Trigger build/test pipeline
    CI->>Hosting: Deploy updated site
    Hosting->>Visitor: Serve new version automatically
```

---

