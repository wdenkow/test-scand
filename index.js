const burgerBtn = document.querySelector("#burger-menu");
const mobileNav = document.querySelector(".header__nav--mobile");

console.log(burgerBtn);

const toggleMobileVisibility = () => {
  mobileNav.classList.toggle("hidden-menu");
};

burgerBtn.addEventListener("click", toggleMobileVisibility);
