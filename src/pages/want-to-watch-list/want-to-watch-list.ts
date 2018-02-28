import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MovieApi, AuthService, FirebaseService} from "../../providers/services";
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
  currPage = 1;
  rowNumInGrid = 0;
  indexinMoviesArray = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieApi : MovieApi, private authService: AuthService, private fireBaseService: FirebaseService) {
    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        this.isAuthenticated = true;
        console.log(this.isAuthenticated);
        
      } else {
        this.isAuthenticated = false;
      }
    })
  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter(){
    if(this.isAuthenticated){

    this.authService.getActiveUser().getIdToken()
    .then( 
      (token: string) => {
        this.fireBaseService.fetchWantToWatch(token)
        .subscribe(
          (movies) => {
            if(movies){
              this.movies = movies;
              this.sortResultForGrid();
              this.currPage +=1;
            }
          },
          error => {console.log(error);
          });
      }
    )
  }
  }

  sortResultForGrid(){
    
    console.log(this.indexinMoviesArray);
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

       if(this.movies[i+1])
       {
         this.grid[this.rowNumInGrid][1] = this.movies[i+1];
       }
       this.rowNumInGrid+=1;
     }
     this.indexinMoviesArray = this.movies.length;
    // console.log(this.indexinMoviesArray);
   }

}
