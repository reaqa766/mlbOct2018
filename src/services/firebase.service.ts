import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Profile } from '../app/models/profile';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  profileList: AngularFireList<any>;
  selectedProfile: Profile = new Profile();

  constructor(private firebase: AngularFireDatabase) { }


  getFirebaseStatsForPlayer() {
    console.log('pba');

  }

  uploadToFirebase () {
    console.log('pba2');

  }

getProfiles() {
  return this.profileList = this.firebase.list('profile');
}

insertProfile(profile: Profile) {
  console.log('profile', profile);

  this.profileList.push({
    name: profile.name,
    lastname: profile.lastname,
    correo: profile.correo,
    birdthDate: profile.birdthDate,
    gender: profile.gender,
    country: profile.country,
    city: profile.city,
    answer1: profile.answer1,
    answer2: profile.answer2,
    answer3: profile.answer3,
    answer4: profile.answer4,
});
}

// updateProfile(profile: Profile) {
//   this.profileList.update(profile.$key, {
//     name: profile.name,
//     lastname: profile.Lastname,
//     email: profile.email,
//     age: profile.age,
//     gender: profile.gender,
//     country: profile.country,
//   });
// }
// deleteProfile($key: string) {
//   this.profileList.remove($key);
// }

}
