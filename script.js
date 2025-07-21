// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const headerHeight = document.querySelector(".navigation").offsetHeight;
        const targetPosition = targetSection.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Active navigation highlighting
  const sections = document.querySelectorAll(".section");
  const navItems = document.querySelectorAll(".nav-links a");

  function updateActiveNav() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const headerHeight = document.querySelector(".navigation").offsetHeight;

      if (window.pageYOffset >= sectionTop - headerHeight - 100) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);

  // Add active class styles
  const style = document.createElement("style");
  style.textContent = `
        .nav-links a.active {
            background: #667eea !important;
            color: white !important;
        }
    `;
  document.head.appendChild(style);

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Apply fade-in effect to sections
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  // Typing effect for the headline
  const headline = document.querySelector(".headline");
  if (headline) {
    const text = headline.textContent;
    headline.textContent = "";
    headline.style.borderRight = "2px solid white";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        headline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      } else {
        headline.style.borderRight = "none";
      }
    };

    // Start typing effect after a delay
    setTimeout(typeWriter, 1000);
  }

  // Add hover effects to contact items
  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)";
      this.style.transition = "transform 0.3s ease";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  });

  // Add skill level indicators (optional enhancement)
  const skillItems = document.querySelectorAll(".skill-list li");
  skillItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "#f0f4ff";
      this.style.paddingLeft = "25px";
      this.style.transition = "all 0.3s ease";
    });

    item.addEventListener("mouseleave", function () {
      this.style.backgroundColor = "transparent";
      this.style.paddingLeft = "20px";
    });
  });

  // Print functionality
  const printButton = document.createElement("button");
  printButton.innerHTML = '<i class="fas fa-print"></i> Print CV';
  printButton.className = "print-btn";
  printButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #667eea;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
        font-family: 'Inter', sans-serif;
        font-weight: 500;
    `;

  printButton.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
    this.style.boxShadow = "0 6px 16px rgba(102, 126, 234, 0.6)";
  });

  printButton.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
  });

  printButton.addEventListener("click", function () {
    window.print();
  });

  document.body.appendChild(printButton);

  // Add loading animation
  window.addEventListener("load", function () {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      document.body.style.opacity = "1";
    }, 100);
  });

  // Add scroll to top functionality
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  scrollToTopBtn.className = "scroll-top-btn";
  scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        background: #764ba2;
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(118, 75, 162, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
    `;

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.body.appendChild(scrollToTopBtn);

  // Show/hide scroll to top button
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = "1";
      scrollToTopBtn.style.visibility = "visible";
    } else {
      scrollToTopBtn.style.opacity = "0";
      scrollToTopBtn.style.visibility = "hidden";
    }
  });

  // Add hover effects to achievement and certification items
  const achievementItems = document.querySelectorAll(
    ".achievement-item, .certification-item"
  );
  achievementItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateX(5px)";
      this.style.transition = "transform 0.3s ease";
    });

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateX(0)";
    });
  });

  // Add responsive navigation toggle for mobile
  const nav = document.querySelector(".navigation");
  const navToggle = document.createElement("button");
  navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  navToggle.className = "nav-toggle";
  navToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #333;
        cursor: pointer;
        padding: 10px;
    `;

  nav
    .querySelector(".container")
    .insertBefore(navToggle, nav.querySelector(".nav-links"));

  navToggle.addEventListener("click", function () {
    const navLinks = nav.querySelector(".nav-links");
    navLinks.classList.toggle("show");
  });

  // Mobile responsive styles for navigation
  const mobileNavStyles = document.createElement("style");
  mobileNavStyles.textContent = `
        @media (max-width: 768px) {
            .nav-toggle {
                display: block !important;
            }
            
            .nav-links {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                padding: 20px;
            }
            
            .nav-links.show {
                display: flex;
            }
            
            .nav-links li {
                margin: 10px 0;
            }
        }
    `;
  document.head.appendChild(mobileNavStyles);
});
