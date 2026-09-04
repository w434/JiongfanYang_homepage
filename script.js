(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  var menuButton = document.querySelector(".menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");

  function setMenu(open) {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    mobileMenu.hidden = !open;
    menuButton.innerHTML = open
      ? '<i data-lucide="x" aria-hidden="true"></i>'
      : '<i data-lucide="menu" aria-hidden="true"></i>';
    if (window.lucide) window.lucide.createIcons();
  }

  if (menuButton) {
    menuButton.addEventListener("click", function () {
      setMenu(menuButton.getAttribute("aria-expanded") !== "true");
    });
  }

  document.querySelectorAll(".mobile-menu a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenu(false);
  });

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries, currentObserver) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  if (window.lucide) window.lucide.createIcons();
})();
