import { Component, OnInit } from '@angular/core';

// import  { Profile } from '../../../models/profile'
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-edit-managers',
  templateUrl: './edit-managers.component.html',
  styleUrls: ['./edit-managers.component.css']
})
export class EditManagersComponent implements OnInit {

  // managerList: Profile[];
  profileForm:any;
  resetForm:any;
  constructor(private firestoreService: FirestoreService ) { }

  ngOnInit() {
  }

  onSubmit(something: any) {
  }

}
