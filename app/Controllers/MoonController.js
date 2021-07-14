import { ProxyState } from "../AppState.js"
import {moonService} from "../Services/MoonService.js"


function drawCount(){
  document.getElementById('cheese-count').innerHTML = /*html*/ `
    <h1>Cheese Count: ${ProxyState.cheese}</h1>
  `
}

function drawMultiplier(){
  let multiplier = 0
  ProxyState.purchasedUpgrades.forEach(pu => {
    multiplier += pu.multiplier
  })
  document.getElementById('multiplier').innerHTML = /*html*/`
  <h1>Current Multiplier: ${multiplier}</h1>
  `
}

export default class MoonController{

  constructor(){
    ProxyState.on("cheese", drawCount)
    ProxyState.on("purchasedUpgrades", drawMultiplier)
    drawMultiplier()
    drawCount()
  }

  mine(){
    moonService.mine()
    console.log(ProxyState.purchasedUpgrades)
  }
}