import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';


@Injectable()
export class FirebaseService{

    movies : Array<{}> = [];
    
    constructor(private http: Http,private authService: AuthService ){}

    storeInWantToWatch(token: string, movie){
       const userId = this.authService.getActiveUser().uid;
       this.movies.push(movie);

       return this.http.put('https://mylibrary-tab.firebaseio.com/' + userId + '/WantToWatch.json?=' + token, this.movies)
       .map(response => {
           return response.json();
       });
    }

    fetchWantToWatch(token: string){
        const userId = this.authService.getActiveUser().uid;

        return this.http.get('https://mylibrary-tab.firebaseio.com/' + userId + '/WantToWatch.json?=' + token)
       .map(response => {
           return response.json();
       });
    }

        

    
}

