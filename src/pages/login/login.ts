import { Component } from '@angular/core';
import { IonicPage, ViewController, LoadingController, AlertController  } from 'ionic-angular';
import { AuthService} from '../../providers/services'
import { NgForm } from "@angular/forms";



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public viewCtrl: ViewController, public authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  onLogin(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Wait ...'
    })
    loading.present();
    this.authService.login(form.value.email, form.value.password)
    .then( data => { 
      loading.dismiss();
      this.viewCtrl.dismiss();
     })
    .catch( error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
        title: "Login Error!",
        message: error.message,
        buttons: ['Ok']
      });
      alert.present();
    });
  }
  
  closeLogin(){
    this.viewCtrl.dismiss();
  }
}
