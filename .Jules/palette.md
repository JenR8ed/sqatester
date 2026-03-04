## 2024-03-04 - Initial Setup
**Learning:** Found an accessibility issue with the tab buttons in `src/App.jsx`. They are missing `aria-selected`, `role="tab"`, and the container is missing `role="tablist"`. Also, the content area needs `role="tabpanel"`. This is a very common pattern to fix.
**Action:** Always verify custom tab implementations have the correct ARIA attributes (tablist, tab, tabpanel, aria-selected, aria-controls).
