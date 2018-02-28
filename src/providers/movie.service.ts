import { Injectable } from '@angular/core';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieApi{

    data: any ;
    baseUrl = "https://api.themoviedb.org/3/movie/";
    discoverUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=';
    searchMovieUrl : string;
    api_key: string = 'ac5a72f28150546accfc377ced758c3a'
    constructor(private http: Http){}

    //getMovie(){
    //    return new Promise(resolve => {
    //        this.http.get(`${this.baseUrl}`)
     //       .subscribe(res => resolve(res.json())); 
    //    })
    //}
    /*

    getMovie() {
        return new Promise (resolve => {
            this.http.get(this.baseUrl).map( res => res.json()).subscribe( data => {
                this.movies = data;
                resolve(this.movies);
            });
        });
   }
   
  getMovie(){
    return this.http.get(this.baseUrl)
        .map(res => res.json());
}
*/
searchMovie(str:string ){
  this.searchMovieUrl = "https://api.themoviedb.org/3/search/movie?api_key=ac5a72f28150546accfc377ced758c3a&language=en-US&query="+str+"&page=1&include_adult=false"
  return this.http.get(this.searchMovieUrl+this.api_key)
            .map(res => res.json());
}

load(pageNum : Number){
  
  return this.http.get(this.discoverUrl + this.api_key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+pageNum)
            .map(res => res.json());
}

searchMovieById(id : String){
    return this.http.get(this.baseUrl +id + "?api_key=" +this.api_key)
            .map(res => res.json());
}
}

