import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from 'src/app/models/profile';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<Profile>;
  userDoc: AngularFirestoreDocument<Profile>;
  users: Observable<Profile[]>;
  user: Observable<Profile>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users');
  }

  // getOrderById(id: string) {
  //   // Get order with the ID
  //   this.orderDoc = this.afs.doc<Order>(`orders/${id}`);

  //   const foundOrder = this.orderDoc.snapshotChanges().pipe(
  //     map(a => {
  //       if (a.payload.exists === false) {
  //         return null;
  //       } else {
  //         const order = a.payload.data();
  //         order.id = a.payload.id;
  //         return order;
  //       }
  //     })
  //   );

  //   return foundOrder;
  // }

  createProfile(id:string,profile: Profile) {
    return this.userCollection.doc(id).set(profile);
  }
  updateProfile(id:string,profile: Profile) {
    return this.userCollection.doc(id).update(profile);
  }
  getManagersProfiles() {
    return this.userCollection.snapshotChanges();
   }
}
