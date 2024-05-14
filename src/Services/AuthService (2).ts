import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

import * as auth from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public userClaims: any;
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    constructor(
        public afAuth: AngularFireAuth,
    ) {
    }
  login(username: string, password: string): void {
    // Vérifier les identifiants et mettre à jour l'état d'authentification
    if (username === 'admin' && password === 'password') {
      this.isAuthenticatedSubject.next(true);
    } else {
      this.isAuthenticatedSubject.next(false);
    }
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }

  isUserAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  
  getUserClaims(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
        this.afAuth.onAuthStateChanged(user => {
            if (!!user) {
                this.setUserClaims(user);
                resolve(user);
            } else {
                reject('No user logged in');
            }
        });
    });
}

getUserToken(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        this.afAuth.onAuthStateChanged(user => {
            if (!!user) {
                user.getIdToken().then(token => resolve(token)).catch(() => reject('No token Available.'));
            } else {
                reject('No user logged in');
            }
        });
    });
}

setUserClaims(user: any): void {
    this.userClaims = user;
//    this.userClaims$.next(user);
}


// doFacebookLogin(): Promise<any> {
//     return this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
// }
//
// doTwitterLogin(): Promise<any> {
//     return this.afAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
// }

doGoogleLogin(): Promise<any> {
    return this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
}









doLogout(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        if (!!this.afAuth.currentUser) {
            this.afAuth.signOut().then(() => {
                this.setUserClaims(null);
                resolve();
            }, err => reject(err));
        } else {
            reject();
        }
    });
}
    


}
 