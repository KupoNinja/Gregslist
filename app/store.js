import Auto from "./Models/Auto.js";

let _state = {
  activeAuto: new Auto({ title: "Auto" }),
  /** @type {Auto[]} */
  autos: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const store = new Store();
export default store;
