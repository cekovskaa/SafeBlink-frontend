// router implementation for single page routing

// routes and their corresponding templates
const routes = {
  "": {
    template: "templates/landing.html",
    title: "SafeBlink - Home",
  },
  "#informiraj": {
    template: "templates/informiraj.html",
    title: "SafeBlink - Информирај се",
  },
  "#diskusii": {
    template: "templates/diskusii.html",
    title: "SafeBlink - Дискусии",
  },
  "#kontakt": {
    template: "templates/kontakt.html",
    title: "SafeBlink - Контакт",
  },
  "#login": {
    template: "templates/login.html",
    title: "SafeBlink - Најави се",
  },
  "#profile": {
    template: "templates/profile.html",
    title: "SafeBlink - Профил",
  },
  "#404": {
    template: "templates/404.html",
    title: "SafeBlink - Page Not Found",
  },
};

// route-specific initialization functions
const routeInitMap = {
  "": [initBackgroundScrollEffect, initBannerVideo],
  "#informiraj": [
    initCarouselTabs,
    initSeeMoreRows,
    initCardOverlay,
    initVideoOverlay,
    initInformirajPage,
  ],
  "#diskusii": [initDiscussionBoard],
  "#kontakt": [],
  "#login": [initPasswordToggle, initLoginForm, initLoginPopup],
  "#profile": [addProfileImagesToUsers],
  "#404": [],
};

const contentDiv = document.getElementById("content");

// function to load content
const loadContent = async (route) => {
  try {
    const response = await fetch(route.template);
    if (response.ok) {
      const html = await response.text();
      contentDiv.innerHTML = html;
      document.title = route.title;
      window.scrollTo(0, 0);

      // runs only the init functions for the current route
      const currentHash = window.location.hash || "";
      const initFunctions = routeInitMap[currentHash] || [];

      initFunctions.forEach((fn) => {
        try {
          fn();
        } catch (err) {
          console.warn(`Error in init function ${fn.name}:`, err);
        }
      });
    } else {
      throw new Error(`Failed to load template: ${route.template}`);
    }
  } catch (error) {
    console.error("Router error:", error);
    contentDiv.innerHTML =
      '<div class="error-message">Page could not be loaded</div>';
  }
};

// main router function
const router = async () => {
  let hash = window.location.hash;

  const route = routes[hash] || (hash === "" ? routes[""] : routes["#404"]);

  contentDiv.style.opacity = 0;

  setTimeout(() => {
    loadContent(route);

    setTimeout(() => {
      contentDiv.style.opacity = 1;
    }, 50);
  }, 250);
};

const updateActiveNavLink = () => {
  const currentHash = window.location.hash || "";

  document
    .querySelectorAll(".nav-links a, .navbar-nav .nav-link")
    .forEach((link) => {
      link.classList.remove("active");
    });

  try {
    const selector =
      currentHash === "" ? 'a[href="#"]' : `a[href="${currentHash}"]`;
    const activeLink = document.querySelector(selector);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  } catch (error) {
    console.error("Error updating active nav link:", error);
  }
};

window.addEventListener("hashchange", () => {
  router();
  updateActiveNavLink();
});

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
        #content {
          transition: opacity 0.25s ease;
        }
      `;
  document.head.appendChild(style);

  // Check auth state on initial load
  checkAuthState();

  router();
  updateActiveNavLink();
});
