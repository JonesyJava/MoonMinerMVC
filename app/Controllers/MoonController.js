import { ProxyState } from "../AppState.js"
import {moonService} from "../Services/MoonService.js"


function drawCount(){
  document.getElementById('cheese-count').innerHTML = /*html*/ `
    <h1>Cheese Count: ${ProxyState.cheese}</h1>
  `
}


export default class MoonController{

  constructor(){
    ProxyState.on("cheese", drawCount)
    drawCount()
  }

  mine(){
    moonService.mine()

  }
}