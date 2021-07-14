import { ProxyState } from "../AppState.js";
import NotificationService from "../Utils/NotificationsService.js";



class UpgradesService{
  constructor(){
    console.log("hello from the serrrrvv");
  }
  
  purchaseUpgrade(upgradeName){
    let foundUpgrade = ProxyState.upgrades.find(u => u.name == upgradeName)
    if(ProxyState.cheese >= foundUpgrade.price){
      ProxyState.cheese -= foundUpgrade.price
      foundUpgrade.price += foundUpgrade.price 
      foundUpgrade.quantity++
      ProxyState.purchasedUpgrades.push(foundUpgrade)
      // this completely resets proxystate.purchasedUpgrades so that our listener will notice a change and run our draw
      ProxyState.purchasedUpgrades = ProxyState.purchasedUpgrades
      NotificationService.confirmNotification("Purchased!", "success")
    } else {
      NotificationService.confirmNotification("You aint got the cheddahhhh", "error")
    }
  }



}

export const upgradesService = new UpgradesService()