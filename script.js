const linkBtns = document.querySelectorAll(".link-btn");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  linkBtns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      btn.style.transform = `perspective(1000px) scale(1.02) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = `perspective(1000px) scale(1) rotateX(0deg) rotateY(0deg) translateY(0)`;

      btn.style.transition = "transform 0.5s ease";
      setTimeout(() => {
        btn.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      }, 500);
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = "1";
  }, 100);
});
