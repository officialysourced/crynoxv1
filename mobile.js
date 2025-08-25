(function() {
  function applyResponsiveCSS() {
    const width = window.innerWidth;
    const oldMobileCSS = document.querySelector('link[data-mobile="true"]');
    if (oldMobileCSS) oldMobileCSS.remove();
    if (width <= 768) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "mobile.css";
      link.setAttribute("data-mobile", "true");
      document.head.appendChild(link);
    }
  }
  applyResponsiveCSS();
  window.addEventListener("resize", applyResponsiveCSS);
})();
