import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { ThirdPage } from '../third/third';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foo = 'My hello world';
  bar = 'Hello My World';
  newBucket = ['This', 'is', 'my' , 'first', 'second'];
  firstNumber=  '0';
  secondNumber= '0';
  result_item = 0;
  sumItem = 0;
  tab1: any;
  tab2: any;
  tab3: any;
  constructor(public navCtrl: NavController) {
    this.tab1 = SecondPage;
    this.tab2 = ThirdPage;
    this.tab3 = HomePage
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
  goToNext(){
    this.navCtrl.push(SecondPage, {name: 'Musfiq', age: 80})
  }
}
