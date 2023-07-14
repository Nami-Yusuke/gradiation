export const dropdown = function(elem) {
  const targets = document.querySelectorAll(elem);
  const activeClasss = "is-dropdownActive";

  function openDropdown() {
    this.closest(".js-hasDropdown").classList.add(activeClasss);
    document.documentElement.classList.add("is-overlayActive");
  }

  function closeDropdown() {
    this.closest(".js-hasDropdown").classList.remove(activeClasss);
    document.documentElement.classList.remove("is-overlayActive");
  }

  targets.forEach(target => {
    target.parentNode.addEventListener("mouseover", openDropdown, { passive: true });
    target.parentNode.addEventListener("mouseleave", closeDropdown, { passive: true });
    target.addEventListener("focus", openDropdown, { passive: true });
    target.addEventListener("blur", closeDropdown, { passive: true });
  });
};
