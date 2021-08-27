import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class FirebaseService {
    isLoggedIn = new BehaviorSubject(false);

    constructor(
        public afs: AngularFirestore,
        public firebaseAuth: AngularFireAuth,
        public router: Router,  

        ) { }
    async signin(email: string, password: string) {
        await this.firebaseAuth.signInWithEmailAndPassword(email, password)
            .then(res => {
                this.isLoggedIn.next(true);
                localStorage.setItem('user', JSON.stringify(res.user))
            })
    }
    async signup(email: string, password: string) {
        await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                this.isLoggedIn.next(true);
                localStorage.setItem('user', JSON.stringify(res.user))
            })
            
    }
    logout() {
        this.firebaseAuth.signOut();
        localStorage.removeItem('user')
    }
}


