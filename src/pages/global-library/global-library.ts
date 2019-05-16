import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController } from 'ionic-angular';

import {MovieApi, AuthService} from "../../providers/services";
import {MovieDetailPage} from "../movie-detail/movie-detail";
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-global-library',
  templateUrl: 'global-library.html',
})
export class GlobalLibraryPage {

 movies : Array<{}> = [];
 queryText : string;
 grid : Array<Array<{}>> = [];
 loadingProgress = false;
 currPage = 1;
 rowNumInGrid = 0;
 indexinMoviesArray = 0;
 isAuthenticated = false;
 disableButtons = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieApi : MovieApi, public modalCtrl: ModalController, private authService: AuthService) {

    firebase.auth().onAuthStateChanged( user => {
      if(user) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    })
  }
 
  ionViewDidLoad(){
    this.loadMovies();
  
  }

//load movies the most popular movies to the users global library//
  loadMovies(){
     this.movieApi.load(this.currPage)
       .subscribe(data => {
         this.movies = data.results;
         
         this.sortResultForGrid();
         this.currPage +=1;
     });   
   }

   doInfinite(infiniteScroll){
     if(!this.loadingProgress && (this.queryText == undefined || this.queryText.trim() == "") ){
       this.loadingProgress = true;
       this.movieApi.load(this.currPage).subscribe(
         res => {
           this.currPage += 1;
           res.results.forEach(a => {
             this.movies.push({
              id: a.id,
              title: a.title,
              poster_path: a.poster_path,
             })
           })
           this.sortResultForGrid();

           setTimeout(() => {
            this.loadingProgress = false;
              }, 500)
         }
       )
     }
     infiniteScroll.complete();
   }

  
  sortResultForGrid(){
    
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

  searchMovie(){
    if(this.queryText && this.queryText.trim() != ""){
    this.movieApi.searchMovie(this.queryText)
                 .subscribe( res => {
                    this.movies = res.results;
                    this.indexinMoviesArray = 0;
                    this.sortResultForGrid();
                  })
                  
                }
    else {
      this.currPage = 1;
      this.movieApi.load(this.currPage)
      .subscribe(res => {
        this.movies = res.results;
        this.indexinMoviesArray = 0;
        this.sortResultForGrid();
    });
  }
  
}

itemTapped(movie){

  let params = [movie,this.disableButtons];

  let itemDetailModale = this.modalCtrl.create(MovieDetailPage, {params: params});

  itemDetailModale.present();
}

login(){
  let loginModale = this.modalCtrl.create(LoginPage);

  loginModale.present();
}

logout(){
  this.authService.logout();
}

register(){
  let registerModale = this.modalCtrl.create(RegisterPage);

  registerModale.present();

}

}
