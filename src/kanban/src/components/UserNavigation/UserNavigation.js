class UserNavigation {
    constructor() {
        this.header = document.getElementById("header");
        this.isUserNavOpened = false;
    }

    dropUserNav(arrow) {
        this.header.insertAdjacentHTML(
            "beforeend",
            `
                    <nav class="user-nav header__user-nav">
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
            this.isUserNavOpened = true;
        }, 200);
    }

    hideUserNav(arrow) {
        document.querySelector(".header__user-nav").remove();
        arrow.classList.add("btn-user-menu-close");
        arrow.classList.remove("btn-user-menu-open");
        setTimeout(() => {
            this.isUserNavOpened = false;
        }, 200);
    }

    btnUserMenuListener() {
        let btnUserMenu = document.querySelector(".header__btn-user-menu");
        let arrow = document.querySelector(".btn-user-menu__symbol");

        btnUserMenu.addEventListener("click", () => {
            if (!this.isUserNavOpened) {
                this.dropUserNav(arrow);
            } else {
                this.hideUserNav(arrow);
            }
        });
    }

    start() {
        this.btnUserMenuListener();
    }
}

export default UserNavigation