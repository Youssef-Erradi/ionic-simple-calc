import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  calc(operation:string){
    let nb1 = document.getElementById('nb1') as HTMLInputElement;
    let nb2 = document.getElementById('nb2')as HTMLInputElement;
    let result = document.getElementById('result');
    let output =  eval(`${nb1.value}${operation}${nb2.value}`)+"";
    if(output === "NaN" || output === "Infinity")
      output = "la division par 0 est impossible";
    result.innerText = output;
  }
}
