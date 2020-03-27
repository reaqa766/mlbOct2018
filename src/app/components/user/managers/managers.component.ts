import { Component, OnInit } from '@angular/core';

// import { FirebaseService } from '../../../../services/firebase.service';
import { PlatformReflectionCapabilities } from '@angular/core/src/reflection/platform_reflection_capabilities';

import  { Profile } from '../../../models/profile'
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  // managerList: Profile[];
  // constructor(private fireBaseService: FirebaseService ) { }

  managerList: Profile[];
  constructor(private firestoreService: FirestoreService ) { }

  ngOnInit() {

    this.firestoreService.getManagersProfiles().subscribe(element => {
      this.managerList = element.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Profile;
    })
    });

    // this.fireBaseService.getProfiles()
    // .snapshotChanges()
    // .subscribe(user => {
    //   this.managerList= [];
    //   user.forEach(element => {
    //     let m = element.payload.toJSON();
    //     m["$key"] = element.key;
    //     this.managerList.push(m as Profile);
    //   });
    // });
  }

}
