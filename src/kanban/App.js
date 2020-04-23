import UserNavController from "./script/UserNavController/UserNavController.js";
import CardController from "./script/CardController/CardController.js";

class App {
    constructor() {
        this.cardController = new CardController();
        this.userNavController = new UserNavController();
    }

    startMainApp() {
        this.userNavController.start();
        this.cardController.start();
    }
}

const app = new App();

window.onload = () => {
    //localStorage.clear();
    app.startMainApp();
}

export default App