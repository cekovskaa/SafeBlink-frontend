// function for gradient bg design effect scroll
function initBackgroundScrollEffect() {
  const section = document.querySelector(".section-three");
  if (!section) return;

  function updateBackgroundPosition() {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY + window.innerHeight / 2;

    let progress = (scrollY - sectionTop) / sectionHeight;
    progress = Math.max(0, Math.min(1, progress));

    section.style.backgroundPosition = `center ${100 - progress * 100}%`;
  }

  window.addEventListener("scroll", updateBackgroundPosition);
  window.addEventListener("resize", updateBackgroundPosition);

  updateBackgroundPosition();
}

// function for banner video
function initBannerVideo() {
  const banner = document.querySelector(".banner");
  if (!banner) return;

  banner.style.cursor = "pointer";
  banner.addEventListener("click", () => {
    banner.style.backgroundImage = "none";

    banner.innerHTML = `
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/DXgYJb67Fyc?si=nlo1wvX_vQEd_Cs1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      style="width: 100%; min-height: 70vh; border: none;">
    </iframe>
  `;
  });
}

// function for carosel tabs(inform-us page)
function initCarouselTabs() {
  const carousel = document.getElementById("carouselExample");
  const tabButtons = document.querySelectorAll(".tab-button");
  const mobileTitle = document.querySelector(".mobile-slide-title");
  const slideTitles = ["Видеа", "Упатства", "Статии"];

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    });
  });

  if (carousel) {
    carousel.addEventListener("slide.bs.carousel", function (event) {
      const slideIndex = event.to;
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabButtons[slideIndex].classList.add("active");
      if (mobileTitle) {
        mobileTitle.textContent = slideTitles[slideIndex];
      }
    });
  }
}

// function to create informiraj cards (card data)
function createInformirajCards() {
  const cards = [
    {
      image: "../images/home_page_1.jpg",
      title: "Лоши навики при 'Live streaming'",
      text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем и...",
      span: "Објавено на 28/05/23",
      category: "Најгледани",
    },
    {
      image: "../images/home_page_2.jpg",
      title: "Праќање на звучни пораки",
      text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
      span: "Објавено на 28/05/23",
      category: "Актуелно",
    },
    {
      image: "../images/home_page_3.jpg",
      title: "Безбедност при користење на апликации",
      text: " Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем и...",
      span: "Објавено на 28/05/23",
      category: "Најнови",
    },
    {
      image: "../images/home_page_4.jpg",
      title: "Различни уреди, различни проблеми",
      text: " Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипс...",
      span: "Објавено на 28/05/23",
      category: "Најгледани",
    },
    {
      image: "../images/home_page_5.jpg",
      title: "Што се случува во позадина додека сурфаш",
      text: " Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ип...",
      span: "Објавено на 28/05/23",
      category: "Актуелно",
    },
    {
      image: "../images/home_page_6.jpg",
      title: "Што е важно кога снимаш некој друг",
      text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ип...",
      span: "Објавено на 28/05/23",
      category: "Најнови",
    },
    {
      image: "../images/home_page_7.jpg",
      title: "Безбедност онлајн и офлајн",
      text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
      span: "Објавено на 28/05/23",
      category: "Најгледани",
    },
    {
      image: "../images/home_page_8.jpg",
      title: " Кој може да ја следи твојата активност на интернет?",
      text: "Лорем ипсум е едноставен модел на текст кој се користел во печатар..",
      span: "Објавено на 28/05/23",
      category: "Актуелно",
    },
    {
      image: "../images/home_page_9.jpg",
      title: "Како да (не) го користиш Инстаграм",
      text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ип...",
      span: "Објавено на 28/05/23",
      category: "Најнови",
    },
    {
      image: "../images/home_page_10.jpg",
      title: "Споделување на содржини",
      text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустрис...",
      span: "Објавено на 28/05/23",
      category: "Најгледани",
    },
    {
      image: "../images/home_page_11.jpg",
      title: "Хакерски напади",
      text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард. Лорем...",
      span: "Објавено на 28/05/23",
      category: "Актуелно",
    },
    {
      image: "../images/home_page_12.jpg",
      title: "Ризици при работење преку интернет",
      text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
      span: "Објавено на 28/05/23",
      category: "Најнови",
    },
    {
      image: "../images/home_page_13.jpg",
      title:
        " На што да внимаваш кога користиш туѓ лаптоп или десктоп компјутер",
      text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустр..",
      span: "Објавено на 28/05/23",
      category: "Најгледани",
    },
    {
      image: "../images/home_page_14.jpg",
      title: "Компјутерски вируси",
      text: " Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард. Лорем ипсум...",
      span: "Објавено на 28/05/23",
      category: "Актуелно",
    },
    {
      image: "../images/home_page_15.jpg",
      title: "Целиот свет во твојот екран",
      text: "  Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
      span: "Објавено на 28/05/23",
      category: "Најнови",
    },
    {
      image: "../images/home_page_16.jpg",
      title: "Што всушност е интернетот?",
      text: "Лорем ипсум долор сит амет, цонсецтетуер адиписицинг елит. Сед до еиусмод темпор инцидидунт ут лаборе ет долоре магна аликуа.",
      span: "Објавено на 28/05/23",
      category: "Најгледани",
    },
  ];

  return cards;
}

// function to display informiraj cards
function displayInformirajCards(categories = null) {
  const cards = createInformirajCards();
  const container = document.querySelector(".inform-us-cards");
  if (!container) return;

  container.innerHTML = "";

  const filteredCards = categories
    ? cards.filter((card) => categories.includes(card.category))
    : cards;

  for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.className = "row mb-md-4";
    if (i >= 2) {
      row.id = `extra-row-${i - 1}`;

      row.className += " d-none d-md-flex";
    }

    for (let j = 0; j < 4; j++) {
      const cardIndex = i * 4 + j;
      if (cardIndex < filteredCards.length) {
        const card = filteredCards[cardIndex];
        const col = document.createElement("div");
        col.className = "col-12 col-md-3";

        col.innerHTML = `
          <div class="card mb-4 mb-md-0 inform-card">
            <img src="${card.image}" class="card-img-top" alt="${card.title}">
            <div class="play-button">
              <i class="fa-solid fa-circle-play"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.text}</p>
              <span>${card.span}</span>
            </div>
          </div>
        `;

        row.appendChild(col);
      }
    }

    container.appendChild(row);
  }

  // Reinitialize card overlay functionality
  initCardOverlay();
}

// function to save filters to localStorage
function saveFilterPreferences(activeFilters) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  const username = user.username;
  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (!users[username]) {
    users[username] = {};
  }

  users[username].activeFilters = Array.from(activeFilters);

  localStorage.setItem("users", JSON.stringify(users));
}

// function to load filter preferences from localStorage
function loadFilterPreferences() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return new Set();

  const username = user.username;
  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username] && users[username].activeFilters) {
    return new Set(users[username].activeFilters);
  }

  return new Set();
}

// function to initialize informiraj page
function initInformirajPage() {
  const activeFilters = loadFilterPreferences();

  if (activeFilters.size > 0) {
    displayInformirajCards(Array.from(activeFilters));
  } else {
    displayInformirajCards();
  }

  const filterButtons = document.querySelectorAll(
    ".filter-buttons-wrapper .filter-btn"
  );

  filterButtons.forEach((button) => {
    const category = button.textContent.trim();
    if (activeFilters.has(category)) {
      button.classList.add("active");
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.textContent.trim();

      if (["Најгледани", "Актуелно", "Најнови"].includes(category)) {
        button.classList.toggle("active");

        if (button.classList.contains("active")) {
          activeFilters.add(category);
        } else {
          activeFilters.delete(category);
        }

        saveFilterPreferences(activeFilters);

        if (activeFilters.size === 0) {
          displayInformirajCards();
        } else {
          displayInformirajCards(Array.from(activeFilters));
        }
      }
    });
  });
}

// function for mobile responsive show more cards(inform-us page)
function initSeeMoreRows() {
  let currentRow = 0;
  const rows = ["extra-row-1", "extra-row-2"];
  const btn = document.getElementById("seeMoreBtn");
  const filterButtons = document.querySelectorAll(
    ".filter-buttons-wrapper .filter-btn"
  );

  if (!btn) return;

  const hasActiveFilters = () => {
    return Array.from(filterButtons).some((button) =>
      button.classList.contains("active")
    );
  };

  const updateButtonVisibility = () => {
    if (hasActiveFilters()) {
      btn.style.display = "none";
    } else {
      btn.style.display = currentRow < rows.length ? "flex" : "none";
    }
  };

  updateButtonVisibility();

  btn.addEventListener("click", () => {
    if (currentRow < rows.length) {
      document.getElementById(rows[currentRow]).classList.remove("d-none");
      currentRow++;
      updateButtonVisibility();
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      updateButtonVisibility();
    });
  });
}

// function for toggle password functionality
function initPasswordToggle() {
  const toggle = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  if (!toggle || !passwordInput) return;

  const icon = toggle.querySelector("i");

  toggle.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    if (type === "text") {
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    } else {
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    }
  });
}

// function for login authentication
function initLoginForm() {
  const form = document.querySelector(".login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorBox = document.getElementById("login-error");
  const popup = document.querySelector(".custom-popup");

  if (popup) {
    popup.style.display = "none";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    errorBox.style.display = "none";
    errorBox.textContent = "";

    // form validation
    if (!username || !password) {
      errorBox.textContent = "Потребно е корисничко име и лозинка.";
      errorBox.style.display = "block";
      return;
    }

    fetch("https://safeblink-backend-1.onrender.com/api/authentication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify({ username }));

          usernameInput.value = "";
          passwordInput.value = "";
          if (popup) {
            popup.style.display = "block";
          }
        } else if (res.status === 401) {
          errorBox.textContent =
            "Невалидно корисничко име или лозинка. Обиди се повторно.";
          errorBox.style.display = "block";
        } else {
          errorBox.textContent = data.error || "Грешка при логирање.";
          errorBox.style.display = "block";
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        errorBox.textContent = "Серверска грешка. Обиди се подоцна.";
        errorBox.style.display = "block";
      });
  });
}

// function to update navbar based on auth state
function updateNavbarForAuthState(isLoggedIn) {
  const loginButton = document.querySelector(".custom-login");
  const profileLink = document.querySelector(".profile-link");
  const logoutButton = document.querySelector(".logout-button");
  const profileNavLink = document.querySelector(".profile-nav-link");

  if (isLoggedIn) {
    // hide login button and show profile link and loggout button
    if (loginButton) loginButton.style.display = "none";
    if (profileLink) {
      profileLink.style.display = "flex";

      // updating profile image in navbar
      const navbarProfileImg = profileLink.querySelector("img");
      if (navbarProfileImg) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          const username = user.username || "User123";
          const users = JSON.parse(localStorage.getItem("users")) || {};

          if (users[username] && users[username].imagePath) {
            navbarProfileImg.src = users[username].imagePath;
          } else {
            // default image
            navbarProfileImg.src = "images/profile-pic.png";
          }
        }
      }
    }
    if (logoutButton) logoutButton.style.display = "block";
    if (profileNavLink) profileNavLink.style.display = "block";
  } else {
    // show login button and hide profile link and logout button
    if (loginButton) loginButton.style.display = "inline-flex";
    if (profileLink) profileLink.style.display = "none";
    if (logoutButton) logoutButton.style.display = "none";
    if (profileNavLink) profileNavLink.style.display = "none";
  }
}

// function to handle logout
function handleLogout() {
  if (confirm("Дали сте сигурни дека сакате да се одјавите?")) {
    localStorage.removeItem("user");
    updateNavbarForAuthState(false);
    window.location.hash = ""; // redirects to landing page
  }
}

// function to check auth state on page load
function checkAuthState() {
  const user = localStorage.getItem("user");
  updateNavbarForAuthState(!!user);
}

// function for rederecting to informiraj-se stranata after succesfull login
function initLoginPopup() {
  const continueBtn = document.querySelector(".custom-popup .btn-custom");
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      updateNavbarForAuthState(true);

      window.location.hash = "#informiraj";
    });
  }
}

// function for overlay
function initCardOverlay() {
  const overlay = document.querySelector(".overlay");
  const overlayContainer = document.querySelector(".overlay-container");
  const overlayTitle = overlay?.querySelector("h6");
  const overlayImg = overlay?.querySelector(".custom-img");
  const backBtn = document.getElementById("back-btn");
  const cards = document.querySelectorAll(".inform-card");
  const navbar = document.querySelector(".navbar");

  if (
    !overlay ||
    !overlayContainer ||
    !overlayTitle ||
    !overlayImg ||
    !backBtn ||
    cards.length === 0 ||
    !navbar
  )
    return;

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardTitle = card.querySelector(".card-title").textContent;
      const cardImgSrc = card
        .querySelector(".card-img-top")
        .getAttribute("src");

      overlayTitle.textContent = cardTitle;
      overlayImg.setAttribute("src", cardImgSrc);

      const user = JSON.parse(localStorage.getItem("user"));

      const desktopProfileNameImg = overlay.querySelector(
        ".leave-comment.d-none.d-md-block .profile-name-img"
      );
      if (user && desktopProfileNameImg) {
        const users = JSON.parse(localStorage.getItem("users")) || {};
        const userData = users[user.username] || {};
        const displayName = userData.credentials?.username || user.username;
        const userImage = userData.imagePath || "../images/profile-pic.png";

        const profileImg = desktopProfileNameImg.querySelector("img");
        const profileName = desktopProfileNameImg.querySelector("p");

        if (profileImg) {
          profileImg.src = userImage;
          profileImg.classList.add("users-profileimgs");
        }
        if (profileName) profileName.textContent = displayName;
      } else if (desktopProfileNameImg) {
        const profileImg = desktopProfileNameImg.querySelector("img");
        const profileName = desktopProfileNameImg.querySelector("p");

        if (profileImg) {
          profileImg.src = "../images/user-unlogged.png";
          profileImg.classList.remove("users-profileimgs");
        }
        if (profileName) profileName.textContent = "Име Презиме";
      }

      const mobileProfileNameImg = overlay.querySelector(
        ".leave-comment.d-block.d-md-none .profile-name-img"
      );
      if (user && mobileProfileNameImg) {
        const users = JSON.parse(localStorage.getItem("users")) || {};
        const userData = users[user.username] || {};
        const displayName = userData.credentials?.username || user.username;
        const userImage = userData.imagePath || "../images/profile-pic.png";

        const profileImg = mobileProfileNameImg.querySelector("img");
        const profileName = mobileProfileNameImg.querySelector("p");

        if (profileImg) {
          profileImg.src = userImage;
          profileImg.classList.add("users-profileimgs");
        }
        if (profileName) profileName.textContent = displayName;
      } else if (mobileProfileNameImg) {
        const profileImg = mobileProfileNameImg.querySelector("img");
        const profileName = mobileProfileNameImg.querySelector("p");

        if (profileImg) {
          profileImg.src = "../images/user-unlogged.png";
          profileImg.classList.remove("users-profileimgs");
        }
        if (profileName) profileName.textContent = "Име Презиме";
      }

      overlay.style.display = "block";
      overlayContainer.style.display = "block";
      overlay.style.zIndex = "999";
      overlayContainer.style.zIndex = "1000";

      navbar.classList.remove("fixed-top");
      navbar.classList.add("position-static");

      backBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        overlayContainer.style.display = "none";

        navbar.classList.remove("position-static");
        navbar.classList.add("fixed-top");
      });
    });
  });

  const commentInput = document.getElementById("leaveComment");
  if (commentInput) {
    commentInput.addEventListener("click", function () {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        window.location.href = "#login";
      }
    });
  }
}

// function for overlay video
function initVideoOverlay() {
  const playBtn = document.getElementById("playVideoBtn");
  const wrapper = document.querySelector(".img-wrapper");

  if (!playBtn || !wrapper) return;

  playBtn.addEventListener("click", () => {
    wrapper.innerHTML = `
      <iframe 
        src="https://www.youtube.com/embed/hX0WJMbV-u4?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="width: 100%; height: 100%; border: none;">
      </iframe>
    `;
  });
}

// function to save a post globally
function savePostToGlobalStorage(post) {
  const allPosts = JSON.parse(localStorage.getItem("allPosts")) || [];

  allPosts.unshift(post);

  localStorage.setItem("allPosts", JSON.stringify(allPosts));
}

// function to get all posts
function getAllPosts() {
  return JSON.parse(localStorage.getItem("allPosts")) || [];
}

// function to create and display a post
function createNewPost(content, isInitialLoad = false) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  const loginUsername = user.username;
  const users = JSON.parse(localStorage.getItem("users")) || {};
  const userData = users[loginUsername] || {};

  const displayName = userData.credentials?.username || loginUsername;

  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();

  const post = {
    content,
    username: displayName,
    userImage: userData.imagePath || "../images/profile-pic.png",
    date: `${dateStr}, ${timeStr}`,
    comments: [],
    reactions: 0,
  };

  if (!isInitialLoad) {
    savePostToGlobalStorage(post);
  }

  const posts = getAllPosts();
  const postIndex = posts.length;

  const postHTML = `
    <div class="discussion-card bg-${getNextBackgroundColor(postIndex)} mb-3">
      <div class="card-body">
        <p class="card-text">${content}</p>
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div>
            <img src="${
              post.userImage
            }" class="rounded-circle me-2" width="30" height="30" />
            <span class="profile-name">${displayName}</span>
          </div>
          <span class="discussion-date">${post.date}</span>
        </div>
        <input type="text" class="comment-input w-100 mb-4" placeholder="Пиши коментар..." />
      </div>
      <div class="d-flex align-items-center reaction-bar">
        <div class="ms-2 me-4">
          <i class="fa fa-plus me-3"></i> 5 Коментари
        </div>
        <div>84 Реакции</div>
      </div>
    </div>
  `;

  const firstColumn = document.querySelector(".col-12.col-md-4");
  const inputCard = firstColumn.querySelector(".input-card");
  inputCard.insertAdjacentHTML("afterend", postHTML);
}

//function to get background colors for discussion cards
function getNextBackgroundColor(index) {
  const colors = ["purple", "green", "dark-purple", "blue"];
  return colors[index % colors.length];
}

// function to display all posts
function displayAllPosts() {
  const posts = getAllPosts();
  const firstColumn = document.querySelector(".col-12.col-md-4");

  const userAddedPosts = Array.from(
    firstColumn.querySelectorAll(".discussion-card")
  ).filter(
    (card) =>
      !card.querySelector(".card-text").textContent.includes("Лорем ипсум")
  );
  userAddedPosts.forEach((post) => post.remove());

  posts.reverse().forEach((post, index) => {
    const postHTML = `
      <div class="discussion-card bg-${getNextBackgroundColor(index)} mb-3">
        <div class="card-body">
          <p class="card-text">${post.content}</p>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>
              <img src="${
                post.userImage
              }" class="rounded-circle me-2" width="30" height="30" />
              <span class="profile-name">${post.username}</span>
            </div>
            <span class="discussion-date">${post.date}</span>
          </div>
          <input type="text" class="comment-input w-100 mb-4" placeholder="Пиши коментар..." />
        </div>
        <div class="d-flex align-items-center reaction-bar">
          <div class="ms-2 me-4">
            <i class="fa fa-plus me-3"></i> 5 Коментари
          </div>
          <div>84 Реакции</div>
        </div>
      </div>
    `;

    const inputCard = firstColumn.querySelector(".input-card");
    inputCard.insertAdjacentHTML("afterend", postHTML);
  });
}

// function to handle view more functionality
function initViewMoreCards() {
  const discussionBoard = document.querySelector(".discussion-board");
  if (!discussionBoard) return;

  const columns = discussionBoard.querySelectorAll(".col-12.col-md-4");
  const totalCards = [];
  const initialVisibleCards = 4;

  columns.forEach((column, columnIndex) => {
    const cards = Array.from(column.querySelectorAll(".discussion-card"));
    let visibleCount = 0;
    let skippedInput = false;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];

      if (
        columnIndex === 0 &&
        !skippedInput &&
        card.classList.contains("input-card")
      ) {
        skippedInput = true;
        continue;
      }

      if (visibleCount < initialVisibleCards) {
        visibleCount++;
      } else {
        card.classList.add("hidden-card");
        totalCards.push(card);
      }
    }
  });

  const viewMoreBtn = document.getElementById("viewMoreBtn");
  if (viewMoreBtn) {
    const newViewMoreBtn = viewMoreBtn.cloneNode(true);
    viewMoreBtn.parentNode.replaceChild(newViewMoreBtn, viewMoreBtn);

    if (totalCards.length > 0) {
      newViewMoreBtn.onclick = function () {
        totalCards.forEach((card) => {
          card.classList.remove("hidden-card");
          card.classList.add("shown");
        });
        discussionBoard.style.maxHeight = "none";
        discussionBoard.style.overflowY = "visible";
        const viewMoreContainer = newViewMoreBtn.closest(
          ".view-more-container"
        );
        if (viewMoreContainer) {
          viewMoreContainer.style.display = "none";
        }
      };
    } else {
      const viewMoreContainer = newViewMoreBtn.closest(".view-more-container");
      if (viewMoreContainer) {
        viewMoreContainer.style.display = "none";
      }
    }
  }
}

// function for discussion board show more cards
function initDiscussionBoard() {
  const discussionBoard = document.querySelector(".discussion-board");
  if (!discussionBoard) return;

  // to check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  if (isLoggedIn) {
    const loginUsername = user.username;
    const users = JSON.parse(localStorage.getItem("users")) || {};
    const userData = users[loginUsername] || {};

    const displayName = userData.credentials?.username || loginUsername;

    // then update profile image and name
    const profileImg = discussionBoard.querySelector(
      ".input-card img.rounded-circle"
    );
    const profileName = discussionBoard.querySelector(
      ".input-card .profile-name"
    );

    if (profileImg) {
      if (userData.imagePath) {
        profileImg.src = userData.imagePath;
      } else {
        profileImg.src = "../images/profile-pic.png";
      }
    }

    if (profileName) {
      profileName.textContent = displayName;
    }
  }

  displayAllPosts();

  initViewMoreCards();

  const inputDiscussion = document.getElementById("newPostInput");
  const addPostBtn = document.getElementById("addPostBtn");

  if (inputDiscussion) {
    const newInput = inputDiscussion.cloneNode(true);
    inputDiscussion.parentNode.replaceChild(newInput, inputDiscussion);

    if (!isLoggedIn) {
      newInput.onclick = function (e) {
        e.stopPropagation();
        window.location.href = "#login";
      };
    } else {
      if (addPostBtn) {
        const newAddPostBtn = addPostBtn.cloneNode(true);
        addPostBtn.parentNode.replaceChild(newAddPostBtn, addPostBtn);

        newAddPostBtn.onclick = function () {
          const postContent = newInput.value.trim();
          if (postContent) {
            createNewPost(postContent, false);
            newInput.value = "";
          }
        };
      }
    }
  }
}

// function for profile page edit button
function initDesktopProfileEdit() {
  document.querySelectorAll(".edit-button").forEach((button) => {
    const newButton = button.cloneNode(true);
    button.parentNode.replaceChild(newButton, button);
  });

  document.querySelectorAll(".edit-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const wrapper = button.closest(".input-wrapper");
      const input = wrapper.querySelector(".profile-inputs");
      const originalValue = input.value;

      const existingIconWrapper = wrapper.querySelector(".icon-wrapper");
      if (existingIconWrapper) {
        wrapper.removeChild(existingIconWrapper);
      }

      input.removeAttribute("readonly");
      input.focus();
      input.classList.add("editing");

      const confirmBtn = document.createElement("span");
      confirmBtn.innerHTML =
        '<i class="fa-sharp fa-solid fa-check check-icon pe-2"></i>';
      confirmBtn.style.cursor = "pointer";
      confirmBtn.style.marginRight = "10px";

      const cancelBtn = document.createElement("span");
      cancelBtn.innerHTML = '<i class="fa-solid fa-xmark ex-icon pe-2"></i>';
      cancelBtn.style.cursor = "pointer";

      const iconWrapper = document.createElement("div");
      iconWrapper.className = "icon-wrapper";
      iconWrapper.style.position = "absolute";
      iconWrapper.style.right = "10px";
      iconWrapper.style.top = "60%";
      iconWrapper.style.transform = "translateY(-50%)";
      iconWrapper.style.paddingBottom = "4px";
      iconWrapper.appendChild(confirmBtn);
      iconWrapper.appendChild(cancelBtn);

      wrapper.appendChild(iconWrapper);
      button.style.display = "none";

      confirmBtn.addEventListener("click", () => {
        const fieldName = input.id.replace("profile-", "");
        saveProfileData({ [fieldName]: input.value });
        input.setAttribute("readonly", true);
        input.classList.remove("editing");
        wrapper.removeChild(iconWrapper);
        button.style.display = "flex";
      });

      cancelBtn.addEventListener("click", () => {
        input.value = originalValue;
        input.setAttribute("readonly", true);
        input.classList.remove("editing");
        wrapper.removeChild(iconWrapper);
        button.style.display = "flex";
      });
    });
  });
}

// function for profile page edit button mobile
function initMobileProfileEdit() {
  const mobileButton = document.getElementById("mobile-edit-button");

  const newButton = mobileButton.cloneNode(true);
  mobileButton.parentNode.replaceChild(newButton, mobileButton);

  newButton.addEventListener("click", function (e) {
    e.preventDefault();

    const isEditing = !document.querySelector(".profile-inputs").readOnly;
    const inputs = document.querySelectorAll(".profile-inputs");
    const originalValues = Array.from(inputs).map((input) => input.value);

    if (isEditing) {
      const updatedData = {};
      document.querySelectorAll(".profile-inputs").forEach((input) => {
        const fieldName = input.id.replace("profile-", "");
        updatedData[fieldName] = input.value;
      });
      saveProfileData(updatedData);

      document.querySelectorAll(".profile-inputs").forEach((input) => {
        input.setAttribute("readonly", true);
        input.classList.remove("editing");
      });

      document
        .querySelectorAll(".icon-wrapper")
        .forEach((wrapper) => wrapper.remove());

      document
        .querySelectorAll(".edit-button")
        .forEach((btn) => (btn.style.display = "flex"));

      this.textContent = "Промени";
    } else {
      document.querySelectorAll(".profile-inputs").forEach((input) => {
        input.removeAttribute("readonly");
        input.classList.add("editing");
      });

      document
        .querySelectorAll(".edit-button")
        .forEach((btn) => (btn.style.display = "none"));

      document.querySelectorAll(".input-wrapper").forEach((wrapper, index) => {
        const existingIconWrapper = wrapper.querySelector(".icon-wrapper");
        if (existingIconWrapper) {
          wrapper.removeChild(existingIconWrapper);
        }

        const confirmBtn = document.createElement("span");
        confirmBtn.innerHTML =
          '<i class="fa-sharp fa-solid fa-check check-icon pe-2"></i>';
        confirmBtn.style.cursor = "pointer";
        confirmBtn.style.marginRight = "10px";

        const cancelBtn = document.createElement("span");
        cancelBtn.innerHTML = '<i class="fa-solid fa-xmark ex-icon pe-2"></i>';
        cancelBtn.style.cursor = "pointer";

        const iconWrapper = document.createElement("div");
        iconWrapper.className = "icon-wrapper";
        iconWrapper.style.position = "absolute";
        iconWrapper.style.right = "10px";
        iconWrapper.style.top = "60%";
        iconWrapper.style.transform = "translateY(-50%)";
        iconWrapper.style.paddingBottom = "4px";
        iconWrapper.appendChild(confirmBtn);
        iconWrapper.appendChild(cancelBtn);

        wrapper.appendChild(iconWrapper);

        confirmBtn.addEventListener("click", () => {
          const input = wrapper.querySelector(".profile-inputs");
          input.setAttribute("readonly", true);
          input.classList.remove("editing");
          wrapper.removeChild(iconWrapper);
        });

        cancelBtn.addEventListener("click", () => {
          const input = wrapper.querySelector(".profile-inputs");
          input.value = originalValues[index];
          input.setAttribute("readonly", true);
          input.classList.remove("editing");
          wrapper.removeChild(iconWrapper);
        });
      });

      this.textContent = "Зачувај";
    }
  });
}

// function to save profile data to localStorage
function saveProfileData(formData) {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const username = user.username || "Username";

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if (!users[username]) {
    users[username] = {
      credentials: {
        username: username,
        email: "",
        pass: "******",
        birthdate: "",
        gender: "",
      },
    };
  }

  users[username].credentials = {
    ...users[username].credentials,
    ...formData,
  };

  localStorage.setItem("users", JSON.stringify(users));
}

// function to load profile data from localStorage
function loadProfileData() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return null;

  const username = user.username || "User123";
  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username] && users[username].credentials) {
    return users[username].credentials;
  }

  return null;
}

// function to initialize profile page
function initProfilePage() {
  const profileData = loadProfileData();
  const form = document.querySelector(".profile-form");

  if (!form) return;

  // get current user
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return;

  const username = user.username || "User123";
  const users = JSON.parse(localStorage.getItem("users")) || {};

  // set profile image if available
  const profileImage = document.getElementById("profile-image");
  if (profileImage && users[username] && users[username].imagePath) {
    profileImage.src = users[username].imagePath;
  } else if (profileImage) {
    profileImage.src = "../images/profile-pic.png";
  }

  if (profileData) {
    Object.keys(profileData).forEach((key) => {
      const input = document.getElementById(`profile-${key}`);
      if (input) {
        input.value = profileData[key];
      }
    });
  } else {
    const defaultData = {
      username: "",
      email: "",
      pass: "",
      birthdate: "",
      gender: "",
    };

    Object.keys(defaultData).forEach((key) => {
      const input = document.getElementById(`profile-${key}`);
      if (input) {
        input.value = defaultData[key];
      }
    });
  }

  initDesktopProfileEdit();
  initMobileProfileEdit();
}

// function to add profile images to existing users
function addProfileImagesToUsers() {
  const users = JSON.parse(localStorage.getItem("users")) || {};

  if (users.User123 && !users.User123.imagePath) {
    users.User123.imagePath = "../images/profile-pic.png";
  }

  if (users.User456 && !users.User456.imagePath) {
    users.User456.imagePath = "../images/profile-pic2.png";
  }

  if (users.User789 && !users.User789.imagePath) {
    users.User789.imagePath = "../images/profile-pic3.png";
  }

  localStorage.setItem("users", JSON.stringify(users));

  initProfilePage();
}
