document.addEventListener("DOMContentLoaded", () => {
/* =========================================================
MOBILE NAVIGATION
========================================================= */

const menuBtn = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
menuBtn.addEventListener("click", () => {
const isOpen = navLinks.classList.toggle("open");


  menuBtn.setAttribute(
    "aria-expanded",
    isOpen ? "true" : "false"
  );
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuBtn.setAttribute(
      "aria-expanded",
      "false"
    );
  });
});


}

/* =========================================================
HERO CODE SLIDER
Web Developer.js → Django.py → React.jsx → ...
========================================================= */

const codeSlides =
document.querySelectorAll(".code-slide");

const codeFile =
document.getElementById("codeFile");

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
    slide.classList.toggle(
      "active",
      slideIndex === index
    );
  });

  codeFile.style.opacity = "0";

  setTimeout(() => {
    codeFile.textContent =
      codeFiles[index];

    codeFile.style.opacity = "1";
  }, 180);
};

const startCodeSlider = () => {
  clearInterval(codeTimer);

  codeTimer = setInterval(() => {
    codeIndex++;

    if (
      codeIndex >= codeSlides.length
    ) {
      codeIndex = 0;
    }

    showCodeSlide(codeIndex);
  }, 3500);
};

showCodeSlide(codeIndex);
startCodeSlider();


}

/* =========================================================
PROJECT SLIDER
========================================================= */

const slider =
document.querySelector(".projects-slider");

const viewport =
document.querySelector(".projects-viewport");

const track =
document.querySelector(".project-grid");

const originalCards =
Array.from(
document.querySelectorAll(".project-card")
);

const prevBtn =
document.querySelector(".slider-prev");

const nextBtn =
document.querySelector(".slider-next");

const dots =
Array.from(
document.querySelectorAll(".slider-dot")
);

if (
slider &&
viewport &&
track &&
originalCards.length === 4 &&
prevBtn &&
nextBtn
) {
const totalProjects =
originalCards.length;


let cardsPerView =
  window.innerWidth <= 640 ? 1 : 2;

let currentIndex =
  cardsPerView;

let autoSlideTimer;
let isAnimating = false;


/* =======================================================
   CLONE CARDS
======================================================= */

const firstClones =
  originalCards
    .slice(0, cardsPerView)
    .map((card) =>
      card.cloneNode(true)
    );

const lastClones =
  originalCards
    .slice(-cardsPerView)
    .map((card) =>
      card.cloneNode(true)
    );

lastClones.reverse().forEach((card) => {
  track.insertBefore(
    card,
    track.firstChild
  );
});

firstClones.forEach((card) => {
  track.appendChild(card);
});


let allCards =
  Array.from(
    track.querySelectorAll(
      ".project-card"
    )
  );


/* =======================================================
   REAL PROJECT INDEX
======================================================= */

const getRealIndex = () => {
  let index =
    currentIndex -
    cardsPerView;

  index =
    ((index % totalProjects) +
      totalProjects) %
    totalProjects;

  return index;
};


/* =======================================================
   DOT UPDATE
======================================================= */

const updateDots = () => {
  if (!dots.length) return;

  const realIndex =
    getRealIndex();

  /*
    Desktop:
    01-02 = first dot
    03-04 = second dot

    Mobile:
    Project 01-02 = first dot
    Project 03-04 = second dot
  */
  const dotIndex =
    Math.floor(realIndex / 2);

  dots.forEach((dot, index) => {
    dot.classList.toggle(
      "active",
      index === dotIndex
    );
  });
};


/* =======================================================
   CARD WIDTH
======================================================= */

const setCardWidths = () => {
  cardsPerView =
    window.innerWidth <= 640
      ? 1
      : 2;

  const gap =
    cardsPerView === 1
      ? 0
      : 10;

  const viewportWidth =
    viewport.clientWidth;

  if (!viewportWidth) return;

  const cardWidth =
    cardsPerView === 1
      ? viewportWidth
      : (viewportWidth - gap) / 2;

  allCards.forEach((card) => {
    card.style.flexBasis =
      `${cardWidth}px`;
  });

  currentIndex =
    cardsPerView;

  track.style.transition =
    "none";

  const moveAmount =
    currentIndex *
    (cardWidth + gap);

  track.style.transform =
    `translateX(-${moveAmount}px)`;

  updateDots();
};


/* =======================================================
   MOVE SLIDER
======================================================= */

const moveSlider = (
  animate = true
) => {
  const gap =
    cardsPerView === 1
      ? 0
      : 10;

  const cardWidth =
    allCards[0]
      .getBoundingClientRect()
      .width;

  const moveAmount =
    currentIndex *
    (cardWidth + gap);

  track.style.transition =
    animate
      ? "transform 0.55s cubic-bezier(.22,1,.36,1)"
      : "none";

  track.style.transform =
    `translateX(-${moveAmount}px)`;

  updateDots();
};


/* =======================================================
   NEXT
======================================================= */

const nextSlide = () => {
  if (isAnimating) return;

  isAnimating = true;

  currentIndex++;

  moveSlider(true);
};


/* =======================================================
   PREVIOUS
======================================================= */

const previousSlide = () => {
  if (isAnimating) return;

  isAnimating = true;

  currentIndex--;

  moveSlider(true);
};


/* =======================================================
   LOOP FIX
======================================================= */

track.addEventListener(
  "transitionend",
  () => {
    /*
      Reached first cloned cards
    */
    if (
      currentIndex >=
      totalProjects +
        cardsPerView
    ) {
      currentIndex =
        cardsPerView;

      moveSlider(false);
    }


    /*
      Reached last cloned cards
    */
    if (
      currentIndex <
      cardsPerView
    ) {
      currentIndex =
        totalProjects +
        cardsPerView -
        1;

      moveSlider(false);
    }

    isAnimating = false;

    updateDots();
  }
);


/* =======================================================
   ARROWS
======================================================= */

nextBtn.addEventListener(
  "click",
  () => {
    nextSlide();
    restartAutoSlide();
  }
);

prevBtn.addEventListener(
  "click",
  () => {
    previousSlide();
    restartAutoSlide();
  }
);


/* =======================================================
   DOTS
======================================================= */

dots.forEach((dot, index) => {
  dot.addEventListener(
    "click",
    () => {
      if (isAnimating) return;

      /*
        First dot = Project 01
        Second dot = Project 03
      */
      currentIndex =
        cardsPerView +
        index * 2;

      /*
        Safety check
      */
      if (
        currentIndex >=
        totalProjects +
          cardsPerView
      ) {
        currentIndex =
          cardsPerView;
      }

      moveSlider(true);

      restartAutoSlide();
    }
  );
});


/* =======================================================
   AUTO SLIDE
======================================================= */

const startAutoSlide = () => {
  clearInterval(
    autoSlideTimer
  );

  autoSlideTimer =
    setInterval(() => {
      nextSlide();
    }, 3500);
};


const restartAutoSlide = () => {
  clearInterval(
    autoSlideTimer
  );

  startAutoSlide();
};


/* =======================================================
   PAUSE ON HOVER
======================================================= */

slider.addEventListener(
  "mouseenter",
  () => {
    clearInterval(
      autoSlideTimer
    );
  }
);

slider.addEventListener(
  "mouseleave",
  () => {
    startAutoSlide();
  }
);


/* =======================================================
   RESIZE
======================================================= */

let resizeTimer;

let previousCardsPerView =
  cardsPerView;

window.addEventListener(
  "resize",
  () => {
    clearTimeout(
      resizeTimer
    );

    resizeTimer =
      setTimeout(() => {
        const newCardsPerView =
          window.innerWidth <= 640
            ? 1
            : 2;

        /*
          Rebuild clones only when
          switching mobile ↔ desktop.
        */
        if (
          newCardsPerView !==
          previousCardsPerView
        ) {
          window.location.reload();

          return;
        }

        setCardWidths();
      }, 200);
  }
);


/* =======================================================
   INITIALIZE PROJECT SLIDER
======================================================= */

setCardWidths();

startAutoSlide();


}

/* =========================================================
SCROLL REVEAL
========================================================= */

const revealElements =
document.querySelectorAll(
".reveal"
);

if (
"IntersectionObserver" in
window
) {
const observer =
new IntersectionObserver(
(entries) => {
entries.forEach(
(entry) => {
if (
entry.isIntersecting
) {
entry.target.classList.add(
"visible"
);


            observer.unobserve(
              entry.target
            );
          }
        }
      );
    },
    {
      threshold: 0.12
    }
  );

revealElements.forEach(
  (element) => {
    observer.observe(element);
  }
);


} else {
revealElements.forEach(
(element) => {
element.classList.add(
"visible"
);
}
);
}

/* =========================================================
FOOTER YEAR
========================================================= */

const yearElement =
document.getElementById(
"year"
);

if (yearElement) {
yearElement.textContent =
new Date().getFullYear();
}

/* =========================================================
ESCAPE KEY
========================================================= */

document.addEventListener(
"keydown",
(event) => {
if (event.key === "Escape") {
navLinks?.classList.remove(
"open"
);


    menuBtn?.setAttribute(
      "aria-expanded",
      "false"
    );
  }
}


);
});
