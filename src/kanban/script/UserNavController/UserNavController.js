"use strict"

let headComponent = document.querySelector(".header");
let btnUserMenu = document.querySelector(".header__btn-user-menu");
let arrow = document.querySelector(".btn-user-menu__symbol");
let isUserNavOpened = false;

function dropUserNav() {
    headComponent.insertAdjacentHTML(
        "beforeend",
        `<nav class="user-nav header__user-nav">
                <ul class="user-nav-list">
                    <li class="user-nav-list__item"><a href="#" class="user-nav-list__link">My account</a></li>
                    <li class="user-nav-list__item"><a href="#" class="user-nav-list__link">My tasks</a></li>
                    <li class="user-nav-list__item"><a href="#" class="user-nav-list__link">Log out</a></li>
                </ul>
              </nav>`
    );
    arrow.classList.add("btn-user-menu-open");
    arrow.classList.remove("btn-user-menu-close");
    setTimeout(() => {
        isUserNavOpened = true;
    }, 200);
}

function hideUserNav() {
    document.querySelector(".header__user-nav").remove();
    arrow.classList.add("btn-user-menu-close");
    arrow.classList.remove("btn-user-menu-open");
    setTimeout(() => {
        isUserNavOpened = false;
    }, 200);
}

btnUserMenu.addEventListener("click", () => {
    if (!isUserNavOpened) {
        dropUserNav();
    } else {
        hideUserNav();
    }
});