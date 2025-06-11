// tabs.js — remove DOMContentLoaded
const tabBar = document.querySelector(".tab-bar");

tabBar?.addEventListener("click", (e) => {
  const clickedTab = e.target.closest(".tab");
  const closeBtn = e.target.closest(".close-btn");

  if (!clickedTab) return;

  if (clickedTab.classList.contains("add-tab")) {
    addNewTab("Google");
    return;
  }

  if (closeBtn) {
    const tab = closeBtn.parentElement;
    const isActive = tab.classList.contains("active");
    tab.remove();

    if (isActive) {
      const tabs = tabBar.querySelectorAll(".tab:not(.add-tab)");
      if (tabs.length > 0) tabs[0].classList.add("active");
    }
  } else {
    if (!clickedTab.classList.contains("add-tab")) {
      tabBar.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      clickedTab.classList.add("active");
    }
  }
});

function addNewTab(title = "Google") {
  const newTab = document.createElement("div");
  newTab.className = "tab";
  newTab.innerHTML = `${title} <span class="close-btn">×</span>`;

  const addTab = tabBar.querySelector(".add-tab");
  tabBar.insertBefore(newTab, addTab);

  tabBar.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  newTab.classList.add("active");
}
