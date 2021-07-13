import { ProxyState } from "../AppState.js";


class MoonService{
  constructor(){

  }
  mine(){
    ProxyState.cheese++
  }
}

export const moonService = new MoonService();