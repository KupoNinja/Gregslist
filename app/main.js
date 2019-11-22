import AutosController from "./Controllers/AutosController.js";

class App {
  autosController = new AutosController();
}

window["app"] = new App();
