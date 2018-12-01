import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService{

    movieCollection: AngularFirestoreCollection<any>;
    movies: Observable<any[]>;
   
    
    constructor(private angularFirestore: AngularFirestore){
    }

    storeInWantToWatch(userId: string, movie){
       this.angularFirestore.collection('Users').doc(userId).collection('Future Watch').add(movie);
      }

       
    storeInAlreadyWatched(userId: string, movie){
       this.angularFirestore.collection('Users').doc(userId).collection('Already Watched').add(movie);
     }

    fetchWantToWatch(userId: string){
      return this.angularFirestore.collection('Users').doc(userId).collection('Future Watch').valueChanges();
    }

    fetchAlreadyWatched(userId: string){
      return this.angularFirestore.collection('Users').doc(userId).collection('Already Watched').valueChanges(); 
    }

    createNewUserDocument(userId){
        console.log(userId);
        this.angularFirestore.collection("Users").doc(userId).set({});  
    }  
}


