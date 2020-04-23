class UserNavController {
    constructor() {
        this.headComponent = document.querySelector(".header");
        this.btnUserMenu = document.querySelector(".header__btn-user-menu");
        this.arrow = document.querySelector(".btn-user-menu__symbol");
        this.isUserNavOpened = false;
    }

    dropUserNav() {
        this.headComponent.insertAdjacentHTML(
            "beforeend",
            `<nav class="user-nav header__user-nav">
                <ul class="user-nav-list">
                    <li class="user-nav-list__item"><a href="#" class="user-nav-list__link">My account</a></li>
                    <li class="user-nav-list__item"><a href="#" class="user-nav-list__link">My tasks</a></li>
                    <li class="user-nav-list__item"><a href="#" class="user-nav-list__link">Log out</a></li>
                </ul>
              </nav>`
        );
        this.arrow.classList.add("btn-user-menu-open");
        this.arrow.classList.remove("btn-user-menu-close");
        setTimeout(() => {
            this.isUserNavOpened = true;
        }, 200);
    }

    hideUserNav() {
        document.querySelector(".header__user-nav").remove();
        this.arrow.classList.add("btn-user-menu-close");
        this.arrow.classList.remove("btn-user-menu-open");
        setTimeout(() => {
            this.isUserNavOpened = false;
        }, 200);
    }

    btnUserMenuListener() {
        this.btnUserMenu.addEventListener("click", () => {
            if (!this.isUserNavOpened) {
                this.dropUserNav();
            } else {
                this.hideUserNav();
            }
        });
    }

    start() {
        this.btnUserMenuListener();
    }
}

export default UserNavController