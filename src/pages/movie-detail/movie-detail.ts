import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import {MovieApi} from "../../providers/services";


/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

  movieId : String = this.navParams.get('id');
  movie;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private movieApi : MovieApi) {
  }

  ionViewDidLoad() {
    this.movieApi.searchMovieById(this.movieId).subscribe(
      res => {
        this.movie = res;
        console.log(res);

      }
    )
  }

  closeMovieDetail(){
    this.viewCtrl.dismiss();
  }



}
