import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { formValue } from '../interfaces/IUser';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    usersCollection: AngularFirestoreCollection<formValue>;
    users: Observable<formValue[]>;
    itemDoc: AngularFirestoreDocument<formValue> | undefined;


    constructor(public fireStore: AngularFirestore) {

        this.usersCollection = this.fireStore.collection('users', ref => ref.orderBy('username', 'asc'));
        this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data() as formValue;
                return data;
            });
        }));
    }


    getUser() {
        return this.users;
    }
    addItem(user: formValue) {
        this.usersCollection.add(user);
    }
}