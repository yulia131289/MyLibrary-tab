import { Component } from '@angular/core';
import { IonicPage, ViewController, LoadingController, AlertController  } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { AuthService} from '../../providers/services'

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor( public viewCtrl: ViewController, private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  onRegister(form: NgForm){
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...'
    });
    loading.present();
    this.authService.register(form.value.email, form.value.password)
    .then( 
      data => {loading.dismiss();})
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: "Register failed!",
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }
  
  closeRegister(){
    this.viewCtrl.dismiss();
  }


}
