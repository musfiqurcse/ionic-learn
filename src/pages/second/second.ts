import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThirdPage } from '../third/third';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  name: string;
  age: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('name');
    this.age  = navParams.get('age');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }
  goToThird(){
    this.navCtrl.push(ThirdPage)
  }
  goBack(){
    this.navCtrl.pop()
  }

}
