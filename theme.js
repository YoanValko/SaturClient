(() => {
  const allowed = new Set(["black-hole", "event-horizon", "nebula", "solar"]);
  const apply = (theme) => {
    const value = allowed.has(theme) ? theme : "black-hole";
    document.body.dataset.theme = value;
    document.querySelectorAll("[data-theme]").forEach((button) => {
      button.classList.toggle("active", button.dataset.theme === value);
    });
    try { localStorage.setItem("saturn-theme", value); } catch (_) {}
  };
  const nav = document.createElement("nav");
  nav.className = "theme-switcher subpage-themes";
  nav.setAttribute("aria-label", "Website themes");
  nav.innerHTML = '<span class="theme-label">Theme</span>' +
    ['black-hole|Black Hole', 'event-horizon|Event Horizon', 'nebula|Nebula', 'solar|Solar']
      .map((item) => { const [value, label] = item.split('|'); return `<button type="button" class="theme-chip" data-theme="${value}">${label}</button>`; })
      .join("");
  document.querySelector(".page")?.prepend(nav);
  nav.querySelectorAll("[data-theme]").forEach((button) => button.addEventListener("click", () => apply(button.dataset.theme)));
  let saved = "black-hole";
  try { saved = localStorage.getItem("saturn-theme") || saved; } catch (_) {}
  apply(saved);
})();
