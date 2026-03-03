lucide.createIcons();

document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Logic ---
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const menuIcon = menuBtn.querySelector("i");
  let isMenuOpen = false;

  // Function to toggle menu state
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      // Open Menu
      mobileMenu.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
      menuIcon.setAttribute("data-lucide", "x");
    } else {
      // Close Menu
      mobileMenu.classList.add("translate-x-full");
      document.body.style.overflow = "";
      menuIcon.setAttribute("data-lucide", "menu");
    }
    lucide.createIcons();
  }

  // Event Listeners
  menuBtn.addEventListener("click", toggleMenu);
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // --- Navbar Blur on Scroll ---
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add(
        "bg-gta-black/80",
        "backdrop-blur-md",
        "border-white/10",
      );
      navbar.classList.remove("py-6", "border-transparent");
      navbar.classList.add("py-4");
    } else {
      navbar.classList.remove(
        "bg-gta-black/80",
        "backdrop-blur-md",
        "border-white/10",
      );
      navbar.classList.add("py-6", "border-transparent");
      navbar.classList.remove("py-4");
    }
  });

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: "0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // --- Parallax Effect for Hero Image ---
  const heroBg = document.querySelector(".parallax-bg");
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition < 800) {
      heroBg.style.transform = `scale(1.1) translateY(${
        scrollPosition * 0.4
      }px)`;
    }
  });

  document.querySelectorAll(".group").forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const img = item.querySelector("img");
      const { width, height } = item.getBoundingClientRect();
      const xVal = (e.offsetX / width - 0.5) * 20; // Move 20px
      const yVal = (e.offsetY / height - 0.5) * 20;
      img.style.transform = `scale(1.1) translate(${xVal}px, ${yVal}px)`;
    });

    item.addEventListener("mouseleave", (e) => {
      const img = item.querySelector("img");
      img.style.transform = `scale(1) translate(0, 0)`;
    });
  });
});
