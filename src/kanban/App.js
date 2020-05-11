import Header from "./src/components/Header/Header.js";
import Main from "./src/components/Main/Main.js";
import Footer from "./src/components/Footer/Footer.js";
import UserNavigation from "./src/components/UserNavigation/UserNavigation.js";

class App {
    constructor() {
        this.header = new Header();
        this.main = new Main();
        this.footer = new Footer();
        this.userNavigation = new UserNavigation();
    }

    start() {
        this.header.start();
        this.main.start();
        this.footer.start();
        this.userNavigation.start();
    }
}

const app = new App();

window.onload = () => {
    // localStorage.clear();
    app.start();
}