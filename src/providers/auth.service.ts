import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { auth } from 'firebase';

export class AuthService{
  register(email: string, password: string){
    return firebase.auth().createUserWithEmailAndPassword(email , password);
  }

  login(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout(){
    firebase.auth().signOut();
  }

  getActiveUser(){
    return firebase.auth().currentUser;
  }



}