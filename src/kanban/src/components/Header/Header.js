class Header {
    constructor() {
        this.header = document.getElementById("header");
    }

    render() {
        this.header.insertAdjacentHTML(
            "beforeend",
            `
                    <div class="btn-menu header__menu">
                        <img class="btn-menu__icon" src="./public/images/btn-menu.svg" alt="menu"/>
                    </div>
                    <h1 class="header__title">Awesome Kanban board</h1>
                    <div class="header__btn-create-list">
                        <button class="btn-create-list">
                            <img class="btn-create-list__icon" src="./public/images/solid-plus-icon.svg" alt="plus"/>
                            <span class="btn-create-list__text">Create new list</span>
                        </button>
                    </div>
                    <button class="btn-user-menu header__btn-user-menu">
                        <img class="btn-user-menu__avatar" src="./public/images/user-avatar.svg" alt="avatar"/>
                        <div class="btn-user-menu__symbol"></div>
                    </button>`
        );
    }

    start() {
        this.render();
    }
}

export default Header