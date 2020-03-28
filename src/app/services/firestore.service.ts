import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import  { Profile } from '../models/profile';
import { Campeonato } from '../fantasy/Interfaces/Campeonato';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  formData: Profile;

  constructor(private firestore: AngularFirestore ) { }

getManagersProfiles() {
 return this.firestore.collection('users').snapshotChanges();
}

subirCampeonato(campeonato: Campeonato){
  return this.firestore.collection('campeonatos').add(campeonato)
}



}
