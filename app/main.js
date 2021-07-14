import ValuesController from "./Controllers/ValuesController.js";
import MoonController from "./Controllers/MoonController.js"
import UpgradesController from "./Controllers/UpgradesController.js";

class App {
  valuesController = new ValuesController();
  moonController = new MoonController();
  upgradesController = new UpgradesController()

}

window["app"] = new App();
