document.addEventListener("DOMContentLoaded", () => {

    //  MOBILE NAVIGATION

  const menuBtn = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

    //  DARK / LIGHT MODE

  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle?.querySelector("i");

  const savedTheme = localStorage.getItem("portfolio-theme");

  const prefersDark = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");

    if (themeIcon) {
      themeIcon.className =
        theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );

      themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
    }
  };

  const initialTheme =
    savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : prefersDark
        ? "dark"
        : "light";

  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";

      const newTheme = currentTheme === "dark" ? "light" : "dark";

      applyTheme(newTheme);
      localStorage.setItem("portfolio-theme", newTheme);
    });
  }


    //  INTRO LOADER

  const introLoader = document.getElementById("intro-loader");

  if (introLoader) {
    const hasVisited = sessionStorage.getItem("portfolio-intro-shown");

    if (hasVisited) {
      introLoader.remove();
    } else {
      sessionStorage.setItem("portfolio-intro-shown", "true");

      const hideIntro = () => {
        setTimeout(() => {
          introLoader.classList.add("intro-hidden");

          setTimeout(() => {
            introLoader.remove();
          }, 700);
        }, 1200);
      };

      if (document.readyState === "complete") {
        hideIntro();
      } else {
        window.addEventListener("load", hideIntro, { once: true });
      }
    }
  }

    //  EMAILJS CONTACT FORM

  const contactForm = document.getElementById("contact-form");
  const contactSubmit = document.getElementById("contact-submit");
  const formStatus = document.getElementById("form-status");

  const EMAILJS_PUBLIC_KEY = "PUBLIC_KEY";
  const EMAILJS_SERVICE_ID = "SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "TEMPLATE_ID";

  if (window.emailjs) {
    window.emailjs.init({
      publicKey: EMAILJS_PUBLIC_KEY
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!window.emailjs) {
        if (formStatus) {
          formStatus.textContent =
            "Email service is unavailable. Please try again later.";
          formStatus.className = "form-status error";
        }
        return;
      }

      const originalButtonHTML = contactSubmit?.innerHTML;

      if (contactSubmit) {
        contactSubmit.disabled = true;
        contactSubmit.innerHTML = "Sending...";
      }

      if (formStatus) {
        formStatus.textContent = "Sending your message...";
        formStatus.className = "form-status";
      }

      try {
        await window.emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          contactForm
        );

        if (formStatus) {
          formStatus.textContent =
            "Your message has been sent successfully!";
          formStatus.className = "form-status success";
        }

        contactForm.reset();
      } catch (error) {
        console.error("EmailJS error:", error);

        if (formStatus) {
          formStatus.textContent =
            "Message could not be sent. Please try again.";
          formStatus.className = "form-status error";
        }
      } finally {
        if (contactSubmit) {
          contactSubmit.disabled = false;
          contactSubmit.innerHTML =
            originalButtonHTML || "Send Message";
        }
      }
    });
  }


    //  HERO CODE SLIDER

  const codeSlides = document.querySelectorAll(".code-slide");
  const codeFile = document.getElementById("codeFile");

  if (codeSlides.length && codeFile) {
    const codeFiles = [
      "Web Developer.js",
      "Django.py",
      "React.jsx"
    ];

    let codeIndex = 0;
    let codeTimer;

    const showCodeSlide = (index) => {
      codeSlides.forEach((slide, slideIndex) => {
        slide.classList.toggle("active", slideIndex === index);
      });

      codeFile.style.opacity = "0";

      setTimeout(() => {
        codeFile.textContent = codeFiles[index] || "Developer.js";
        codeFile.style.opacity = "1";
      }, 180);
    };

    const startCodeSlider = () => {
      clearInterval(codeTimer);

      codeTimer = setInterval(() => {
        codeIndex = (codeIndex + 1) % codeSlides.length;
        showCodeSlide(codeIndex);
      }, 3500);
    };

    showCodeSlide(codeIndex);
    startCodeSlider();
  }

    //  PROJECT DATA

  const projects = [
    {
      title: "BlogSphere",
      type: "Full Stack",
      image: "Images/blog.png",
      alt: "BlogSphere project preview",
      description:
        "A modern full-stack blogging platform with authentication, email verification, posts, search, comments, likes, bookmarks, and image uploads.",
      technologies: ["React", "Django", "DRF", "PostgreSQL"],
      github: "https://github.com/karib19/Blog-Project",
      live: "https://blog-project-mu-one.vercel.app/"
    },
    {
      title: "Learning Management System",
      type: "Full Stack",
      image: "Images/LMS.png",
      alt: "Learning Management System project preview",
      description:
        "A learning management platform with role-based authentication, course management, enrollment, dashboards, and JWT authentication.",
      technologies: ["React", "Django", "DRF", "JWT"],
      github: "https://github.com/karib19/LMS_project",
      live: "https://lms-rosy-alpha-76.vercel.app/"
    },
    {
      title: "Task Manager",
      type: "Frontend",
      image: "Images/task_manager.png",
      alt: "Task Manager project preview",
      description:
        "A simple task management application focused on creating, completing, and deleting tasks through a clean responsive interface.",
      technologies: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/karib19/task_manager_app",
      live: "https://karib19.github.io/task_manager_app/"
    },
    {
      title: "Weather App",
      type: "Frontend",
      image: "Images/weather_app.png",
      alt: "Weather App project preview",
      description:
        "A responsive weather application using a weather API to display current conditions, forecasts, search history, and location suggestions.",
      technologies: ["React", "Weather API", "Axios"],
      github: "https://github.com/karib19/weather_app-project",
      live: "https://karib19.github.io/weather_app-project/"
    },
    {
      title: "Spendly Expense Tracker",
      type: "Full Stack",
      image: "Images/spendly.png",
      alt: "Spendly Expense Tracker project preview",
      description:
        "A full-stack personal finance application for tracking income and expenses, managing budgets, and visualizing financial activity through interactive reports and charts. Built with React, Django REST Framework, and PostgreSQL.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Django REST Framework",
        "PostgreSQL",
        "JWT Authentication"
      ],
      github: "https://github.com/karib19/spendly",
      live: "https://spendly-karib20.vercel.app/login"
    }
  ];

  /* =========================================================
     CREATE PROJECT CARD
  ========================================================= */

  const createProjectCard = (project, index) => {
    const card = document.createElement("article");

    card.className = "project-card";

    const technologies = project.technologies
      .map((technology) => `<span>${technology}</span>`)
      .join("");

    card.innerHTML = `
      <div class="project-image">
        <img
          src="${project.image}"
          alt="${project.alt}"
          loading="lazy"
        />
      </div>

      <div class="project-content">
        <div class="project-top">
          <div>
            <p class="project-number">
              ${String(index + 1).padStart(2, "0")}
            </p>

            <h3>${project.title}</h3>
          </div>

          <span class="project-type">
            ${project.type}
          </span>
        </div>

        <p class="project-description">
          ${project.description}
        </p>

        <div class="project-tags">
          ${technologies}
        </div>

        <div class="project-links">
          <a
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github"></i>
            Code
          </a>

          <a
            href="${project.live}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            Live
          </a>
        </div>
      </div>
    `;

    return card;
  };

    //  PROJECT COUNT

  const projectCount = document.querySelector("[data-project-count]");

  if (projectCount) {
    projectCount.textContent = projects.length;
  }

    //  PROJECT SLIDER

  const slider = document.querySelector(".projects-slider");
  const viewport = document.querySelector(".projects-viewport");
  const track = document.querySelector(".project-grid");

  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");

  const dotsContainer = document.querySelector(".slider-controls");

  if (
    slider &&
    viewport &&
    track &&
    projects.length &&
    prevBtn &&
    nextBtn
  ) {
    let cardsPerView = window.innerWidth <= 640 ? 1 : 2;
    let currentIndex = cardsPerView;
    let autoSlideTimer;
    let resizeTimer;
    let isAnimating = false;
    let allCards = [];

    const getRealIndex = () => {
      const index = currentIndex - cardsPerView;

      return ((index % projects.length) + projects.length) % projects.length;
    };

    const getPageCount = () => {
      return Math.ceil(projects.length / cardsPerView);
    };

    const updateDots = () => {
      if (!dotsContainer) return;

      const dots = Array.from(
        dotsContainer.querySelectorAll(".slider-dot")
      );

      if (!dots.length) return;

      const realIndex = getRealIndex();
      const dotIndex = Math.floor(realIndex / cardsPerView);

      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === dotIndex);
      });
    };

    const createDots = () => {
      if (!dotsContainer) return;

      dotsContainer.innerHTML = "";

      for (let i = 0; i < getPageCount(); i++) {
        const dot = document.createElement("button");

        dot.type = "button";
        dot.className = "slider-dot";
        dot.setAttribute("aria-label", `Show project group ${i + 1}`);

        dot.addEventListener("click", () => {
          if (isAnimating) return;

          currentIndex = cardsPerView + i * cardsPerView;

          moveSlider(true);
          restartAutoSlide();
        });

        dotsContainer.appendChild(dot);
      }

      updateDots();
    };

    const setCardWidths = () => {
      const gap = cardsPerView === 1 ? 0 : 10;
      const viewportWidth = viewport.clientWidth;

      if (!viewportWidth) return;

      const cardWidth =
        cardsPerView === 1
          ? viewportWidth
          : (viewportWidth - gap) / 2;

      allCards.forEach((card) => {
        card.style.flexBasis = `${cardWidth}px`;
      });

      track.style.transition = "none";

      const moveAmount = currentIndex * (cardWidth + gap);

      track.style.transform = `translateX(-${moveAmount}px)`;

      updateDots();
    };

    const moveSlider = (animate = true) => {
      const gap = cardsPerView === 1 ? 0 : 10;
      const cardWidth = allCards[0]?.getBoundingClientRect().width;

      if (!cardWidth) {
        isAnimating = false;
        return;
      }

      const moveAmount = currentIndex * (cardWidth + gap);

      track.style.transition = animate
        ? "transform 0.55s cubic-bezier(.22,1,.36,1)"
        : "none";

      track.style.transform = `translateX(-${moveAmount}px)`;

      updateDots();
    };

    const buildSlider = () => {
      cardsPerView = window.innerWidth <= 640 ? 1 : 2;

      track.innerHTML = "";

      const originalCards = projects.map((project, index) =>
        createProjectCard(project, index)
      );

      const lastClones = originalCards
        .slice(-cardsPerView)
        .map((card) => card.cloneNode(true));

      const firstClones = originalCards
        .slice(0, cardsPerView)
        .map((card) => card.cloneNode(true));

      lastClones.forEach((card) => track.appendChild(card));

      originalCards.forEach((card) => track.appendChild(card));

      firstClones.forEach((card) => track.appendChild(card));

      allCards = Array.from(track.querySelectorAll(".project-card"));

      currentIndex = cardsPerView;
      isAnimating = false;

      createDots();
      setCardWidths();
    };

    const nextSlide = () => {
      if (isAnimating) return;

      isAnimating = true;
      currentIndex++;

      moveSlider(true);
    };

    const previousSlide = () => {
      if (isAnimating) return;

      isAnimating = true;
      currentIndex--;

      moveSlider(true);
    };

    track.addEventListener("transitionend", (event) => {
      if (event.propertyName !== "transform") return;

      if (currentIndex >= projects.length + cardsPerView) {
        currentIndex = cardsPerView;
        moveSlider(false);
      }

      if (currentIndex < cardsPerView) {
        currentIndex = projects.length + cardsPerView - 1;
        moveSlider(false);
      }

      isAnimating = false;
      updateDots();
    });

    nextBtn.addEventListener("click", () => {
      nextSlide();
      restartAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      previousSlide();
      restartAutoSlide();
    });

    const startAutoSlide = () => {
      clearInterval(autoSlideTimer);

      autoSlideTimer = setInterval(() => {
        nextSlide();
      }, 3500);
    };

    const restartAutoSlide = () => {
      clearInterval(autoSlideTimer);
      startAutoSlide();
    };

    slider.addEventListener("mouseenter", () => {
      clearInterval(autoSlideTimer);
    });

    slider.addEventListener("mouseleave", () => {
      startAutoSlide();
    });

    slider.addEventListener("focusin", () => {
      clearInterval(autoSlideTimer);
    });

    slider.addEventListener("focusout", () => {
      startAutoSlide();
    });

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);

      resizeTimer = setTimeout(() => {
        const newCardsPerView = window.innerWidth <= 640 ? 1 : 2;

        if (newCardsPerView !== cardsPerView) {
          buildSlider();
        } else {
          setCardWidths();
        }
      }, 200);
    });

    buildSlider();
    startAutoSlide();
  }

  // SCROLL REVEAL

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }


    //  FOOTER YEAR


  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
