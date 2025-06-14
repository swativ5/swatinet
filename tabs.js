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

// Connect tab functionality
document.addEventListener('click', function(e) {
  const connectBtn = document.getElementById('profile-btn');
  const connectTab = document.getElementById('connect-tab');
  const closeConnectBtn = document.getElementById('close-connect');

  if (!connectBtn || !connectTab) return;

  if (e.target.closest('#profile-btn')) {
    e.stopPropagation();
    connectTab.style.display = (connectTab.style.display === 'block') ? 'none' : 'block';
  }

  if (e.target.closest('#close-connect')) {
    connectTab.style.display = 'none';
  }

  if (!e.target.closest('#connect-tab') && !e.target.closest('#profile-btn')) {
    connectTab.style.display = 'none';
  }
});

// Home button functionality
document.addEventListener('click', function(e) {
  // Check if home button was clicked
  if (e.target.closest('.nav-buttons button') && e.target.closest('i.fa-house')) {
    window.location.href = 'index.html';
  }
});