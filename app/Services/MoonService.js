import { ProxyState } from "../AppState.js";


class MoonService{
  constructor(){

  }
  mine(){
    ProxyState.cheese++
    ProxyState.purchasedUpgrades.forEach(u => {
      ProxyState.cheese += u.multiplier
    })
  }
}

export const moonService = new MoonService();
