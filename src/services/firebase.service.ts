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
    email: profile.email,
    birthDate: profile.birthDate,
    gender: profile.gender,
    country: profile.country,
    city: profile.city,
    team: profile.team
});




}

updateProfile(profile: Profile) {
  this.profileList.update(profile.$key, {
    name: profile.name,
    lastname: profile.lastname,
    email: profile.email,
    birthDate: profile.birthDate,
    gender: profile.gender,
    country: profile.country,
    city: profile.city,
    team: profile.team
  });
}

deleteProfile($key: string) {
  this.profileList.remove($key);
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
