import { ProxyState } from "../AppState.js"
import {upgradesService} from '../Services/UpgradesService.js'

function drawUpgrades(){
  let template = ''
  ProxyState.upgrades.forEach(u => {
    template += /*html*/ `
    <button class="btn btn-success" onclick="app.upgradesController.purchaseUpgrade('${u.name}')">${u.name} - ${u.price}</button>
    `
  })
  document.getElementById('upgrades').innerHTML = template
}


export default class UpgradesController{
  constructor(){
    ProxyState.on('purchasedUpgrades', drawUpgrades)
    drawUpgrades()
  }

  purchaseUpgrade(upgradeName){
    upgradesService.purchaseUpgrade(upgradeName)
  }
}