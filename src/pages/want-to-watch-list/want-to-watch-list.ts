import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,  ModalController } from 'ionic-angular';
import { AuthService, FirebaseService} from "../../providers/services";
import {MovieDetailPage} from "../movie-detail/movie-detail";
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-want-to-watch-list',
  templateUrl: 'want-to-watch-list.html',
})
export class WantToWatchListPage {

  movies : Array<{}> = [];
  grid : Array<Array<{}>> = [];
  isAuthenticated = false;
  //currPage = 1;
  rowNumInGrid = 0;
  indexinMoviesArray = 0;
  currPage = 1;
  disableButtons = true;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, private fireBaseService: FirebaseService, public modalCtrl: ModalController) {
    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    })
  }

  ionViewWillEnter() {
    var userId = this.authService.getActiveUser().uid;
    this.fireBaseService.fetchWantToWatch(userId).subscribe(items => {
      this.movies = items;
      this.sortResultForGrid();
      this.currPage +=1;
      console.log(this.movies)});    
  }

  sortResultForGrid(){
    
    //console.log(this.indexinMoviesArray);
    if(this.indexinMoviesArray == 0){
      this.rowNumInGrid = 0;
    }
    for(let i = this.indexinMoviesArray; i < this.movies.length ; i+=2) {
      
       //this.grid.push({});
       this.grid[this.rowNumInGrid] = Array(2);

       if(this.movies[i])
       {
         //console.log(this.movies);
         this.grid[this.rowNumInGrid][0] = this.movies[i];
       }
       console.log(this.movies[0]);
       console.log(this.movies[1]);

       if(this.movies[i+1])
       {
        console.log("this.movies[1]");
         this.grid[this.rowNumInGrid][1] = this.movies[i+1];
       }
       this.rowNumInGrid+=1;
     }
     this.indexinMoviesArray = this.movies.length;
    // console.log(this.indexinMoviesArray);
   }

   itemTapped(movie){

    let params = [movie,this.disableButtons];
    let itemDetailModale = this.modalCtrl.create(MovieDetailPage, {params: params});
  
    itemDetailModale.present();
  }
}
