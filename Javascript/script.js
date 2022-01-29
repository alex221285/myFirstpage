let burger = document.querySelector(".header__burger");
burger.addEventListener(" click", show);

function show() {
    let menu = document.querySelector(".menu__row");
    menu.classList.toggle("show");
    burger.classList.toggle("show");
}