import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foo = 'My hello world';
  bar = 'Hello My World';
  firstNumber=  '0';
  secondNumber= '0';
  result_item = 0;
  sumItem = 0;
  constructor(public navCtrl: NavController) {

  }

  getText(){
    let emptyString ='';
    for(let i=0; i<7; i++){
      emptyString +=this.bar+' ';
    }
    return emptyString;
  }
  calculate(){
    return ++this.result_item;
  }
  findSum(){
    this.sumItem = parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }
}
