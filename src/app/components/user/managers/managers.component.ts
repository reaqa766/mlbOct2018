import { Component, OnInit } from '@angular/core';

// import { FirebaseService } from '../../../../services/firebase.service';
import { PlatformReflectionCapabilities } from '@angular/core/src/reflection/platform_reflection_capabilities';

import  { Profile } from '../../../models/profile'
import { FirestoreService } from 'src/app/services/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';

import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent implements OnInit {

  // managerList: Profile[];
  // constructor(private fireBaseService: FirebaseService ) { }
  ManagersList: boolean ;
  managerList: Profile[];
  constructor(private userService:UserService,
    private firestore: AngularFirestore,
    private toastr:ToastrService ) { }

  ngOnInit() {
    this.ManagersList = true;
    this.userService.getManagersProfiles().subscribe(element => {
      this.managerList = element.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        };
      })
      console.log(this.managerList);
    });

   }
  //  onEdit(manager: Profile) {
  //   //  const updatedManager = {...formData}
  //    this.userService.updateProfile(manager.id,updatedManager)
  //   // this.ManagersList = false;

  // }

  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('users/' + id).delete();
      this.toastr.warning('Deleted successfully','MANAGER. Register');
    }
  }
}
