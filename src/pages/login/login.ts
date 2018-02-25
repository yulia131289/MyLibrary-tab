import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { AuthService} from '../../providers/services'
import { Observable } from 'rxjs/Observable';
import { NgForm } from "@angular/forms";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public auth: AuthService) {
  }

  onLogin(form: NgForm){
    console.log(form.value);
  }
  
  closeLogin(){
    this.viewCtrl.dismiss();
  }

 
}
