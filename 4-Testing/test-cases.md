# ✅ Test Cases – GitHub Portfolio Project

**Project:** GitHub Portfolio Generator  
**Author:** Runarok  
**Phase:** Testing  
**Last Updated:** August 26, 2025

---

This document captures **manual test scenarios** to validate the core functionality, responsiveness, and usability of the portfolio website.

---

## 📋 Manual Test Scenarios

| **Test ID** | **Scenario**                               | **Expected Outcome**                                | **Status** |
|-------------|---------------------------------------------|-----------------------------------------------------|------------|
| TC-001      | Load homepage on desktop                    | Site loads within 2 seconds, no layout issues       | ✅ Passed   |
| TC-002      | Check GitHub profile link                   | Opens GitHub profile in a new browser tab           | ✅ Passed   |
| TC-003      | Toggle between light/dark themes            | Theme changes instantly without page reload         | ✅ Passed   |
| TC-004      | View site on mobile resolution (375px wide) | Navigation collapses, content remains readable      | ✅ Passed   |
| TC-005      | Switch to tablet resolution (768px)         | Grid adjusts and content scales correctly           | ✅ Passed   |
| TC-006      | Enter invalid GitHub username in config.js  | Friendly error message is shown                     | ✅ Passed   |
| TC-007      | Open project repo link from card            | Navigates to correct repository on GitHub           | ✅ Passed   |
| TC-008      | Scroll through repo list on mobile          | Cards stack vertically and scroll smoothly          | ✅ Passed   |
| TC-009      | Test external links (LinkedIn, Email)       | Opens target in a new tab and reaches correct URL   | ✅ Passed   |
| TC-010      | Check theme persistence                     | Theme stays consistent during session               | ✅ Passed   |

---

## 📎 Notes

- Tests performed manually using Chrome DevTools and responsive simulator.
- No unit or integration tests applicable due to project scope (HTML/CSS/JS only).
