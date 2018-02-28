import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import {MovieApi, AuthService, FirebaseService} from "../../providers/services";
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movieId : String = this.navParams.get('id');
  movie;
  isAuthenticated = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private movieApi : MovieApi, private authService: AuthService, private fireBaseService: FirebaseService) {
    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        this.isAuthenticated = true;
        
      } else {
        this.isAuthenticated = false;
      }
    })
  }

  ionViewDidLoad() {
    this.movieApi.searchMovieById(this.movieId).subscribe(
      res => {
        this.movie = res;
      }
    )
  }

  closeMovieDetail(){
    this.viewCtrl.dismiss();
  }

  addToFutureWatch(){
    this.authService.getActiveUser().getIdToken()
    .then( 
      (token: string) => {
        this.fireBaseService.storeInWantToWatch(token, this.movie)
        .subscribe(
          () => console.log('sucsees!'),
          error => {console.log(error);
          }
        );
      }
    )
  }

  addToAlreadyWatched(){

  }



}
