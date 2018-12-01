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

  movieId;
  movie;
  isAuthenticated = false;
  disableButtons = false ;
  params;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private movieApi : MovieApi, private authService: AuthService, private fireBaseService: FirebaseService) {
    
    this.params = this.navParams.get('params');
    console.log(this.params);
    this.movieId = this.params[0].id;
    
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
        this.disableButtons = this.params[1];
        console.log(this.disableButtons);
      }
    )
  }

  closeMovieDetail(){
    this.viewCtrl.dismiss();
  }

  addToFutureWatch(){

    var userId = this.authService.getActiveUser().uid;
    this.fireBaseService.storeInWantToWatch(userId, this.movie);
  }

  addToAlreadyWatched(){
   
    var userId = this.authService.getActiveUser().uid;
    this.fireBaseService.storeInAlreadyWatched(userId, this.movie);

  }



}
