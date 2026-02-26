(() => {
  // footer year
  const y = new Date().getFullYear();
  const el = document.getElementById("year");
  if (el) el.textContent = `© ${y}`;

  // smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();
