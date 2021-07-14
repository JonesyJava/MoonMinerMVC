import Upgrade from "./Models/Upgrade.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  upgrades = [new Upgrade("daggy mcdagger", 5, 0, 2), new Upgrade("jonesys pickaxe", 10, 0, 3), new Upgrade("the 2x", 1000, 0, 100), new Upgrade("annies drill", 10000, 0, 1000)]
  purchasedUpgrades = []
  cheese = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
