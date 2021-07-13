import MoonController from "./Controllers/MoonController.js";

class App {
  moonController = new MoonController();
}

window["app"] = new App();
