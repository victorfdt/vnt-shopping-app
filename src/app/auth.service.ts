import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

// IMPORTANTE - se eu quiser usar o jquery eu faço isso também.
// Isso é necessário pois são bibliotecas genéricas
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService implements CanActivate{

  canActivate(){
    console.log("CanActive was called");
    return true;
  }
  constructor(private afAuth: AngularFireAuth) { }

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    this.afAuth.auth.signOut();
  }

}
