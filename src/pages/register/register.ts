import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ViewController  } from 'ionic-angular';
import { NgForm } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  onRegister(form: NgForm){
    console.log(form.value);
  }
  
  closeRegister(){
    this.viewCtrl.dismiss();
  }


}
