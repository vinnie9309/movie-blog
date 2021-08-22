import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/Item';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item> | undefined;
  //TODO interface
  // itemsCollection: AngularFirestoreCollection<any> | undefined;
  // items: Observable<Array<any>>;

  constructor(public fireStore: AngularFirestore) {
    // getting the properties
    // this.items = this.fireStore.collection('movies').valueChanges();


    this.itemsCollection = this.fireStore.collection('movies', ref => ref.orderBy('title', 'asc'));

    this.items = this.itemsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Item;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }


  getItems() {
    return this.items;
  }
  addItem(item: Item) {
    this.itemsCollection.add(item);
  }

  deleteItem(item: Item) {
    this.itemDoc = this.fireStore.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Item) {
    this.itemDoc = this.fireStore.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }


}
