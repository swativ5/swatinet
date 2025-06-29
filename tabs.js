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
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
    });
    
    // Hide search header
    const searchHeader = document.querySelector('.search-header');
    if (searchHeader) {
      searchHeader.style.display = 'none';
    }
    
    // Show home page
    const homePage = document.getElementById('home');
    if (homePage) {
      homePage.style.display = 'block';
    }
  }
});

// Bookmark Navigation Function
function initBookmarkNavigation() {
  const bookmarks = document.querySelectorAll('.bookmarks-bar .bookmark');
  const pages = document.querySelectorAll('.page');
  const searchHeader = document.querySelector('.search-header');

  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', (e) => {
      e.preventDefault();
      const target = bookmark.getAttribute('data-page');
      
      // Hide all pages
      pages.forEach(page => {
        page.style.display = 'none';
      });
      
      // Show target page
      const targetPage = document.getElementById(target);
      if (targetPage) {
        if (target === 'home') {
          targetPage.style.display = 'block';
          if (searchHeader) {
            searchHeader.style.display = 'none';
          }
        } else {
          targetPage.style.display = 'block';
          if (searchHeader) {
            searchHeader.style.display = 'flex';
          }
        }
      }
    });
  });
}

// Category Navigation Function
function initCategoryNavigation() {
  const categoryButtons = document.querySelectorAll('.categories button');
  const pages = document.querySelectorAll('.page');
  const searchHeader = document.querySelector('.search-header');

  categoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const buttonText = button.textContent.toLowerCase();
      
      // Hide all pages
      pages.forEach(page => {
        page.style.display = 'none';
      });
      
      // Show target page
      const targetPage = document.getElementById(buttonText);
      if (targetPage) {
        if (buttonText === 'home') { 
          targetPage.style.display = 'block';
          if (searchHeader) {
            searchHeader.style.display = 'none';
          }
        } else {
          targetPage.style.display = 'block';
          if (searchHeader) {
            searchHeader.style.display = 'flex';
          }
        }
      }
    });
  });
}