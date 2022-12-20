const btnMenu = document.querySelector(".button-menu")
btnMenu.addEventListener("click", () => {
  const menu = document.querySelector(".menu-nav ul")
  menu.classList.toggle("active")
  btnMenu.classList.toggle("active")
})