class Footer {
    constructor() {
        this.footer = document.getElementById("footer");
    }

    render() {
        this.footer.insertAdjacentHTML(
            "beforeend",
            `
                    <ul class="footer__taskbar">
                        <li class="footer__active">Active tasks: 5</li>
                        <li class="footer__finished">Finished tasks: 10</li>
                        <li class="footer__author">Kanban board by Dmitry, 2020</li>
                    </ul>`
        );
    }

    start() {
        this.render();
    }
}

export default Footer