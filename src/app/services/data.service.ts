import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService { 
  //TODO interface
  // itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<Array<any>>;

  constructor(public fireStore: AngularFirestore) {
    // getting the properties
    this.items = this.fireStore.collection('movies').valueChanges();
  }

  getItems() {
    return this.items;
  }


  

}
