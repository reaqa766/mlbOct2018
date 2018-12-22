import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//  Service
import { FirebaseService } from '../../../../services/firebase.service';

// Class
import { Profile } from '../../../../app/models/profile';

// toastr
import { ToastrService } from 'ngx-toastr';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;



  constructor( private profileService: FirebaseService,
              private toastr: ToastrService, fb: FormBuilder) {
                this.profileForm = fb.group({
                  'name': [null, Validators.required],
                  'lastname': [null, Validators.required],
                  'email': [null, [Validators.required, Validators.email]],
                  'gender': [null, Validators.required],
                  'age': [null, Validators.required],
                  'country': [null, Validators.required],
                  'comments': [null],


                });
              }
  ngOnInit() {
    this.profileService.getProfiles();
    this.resetForm();
  }
  onSubmit(profileForm: any) {
    console.log('datos', profileForm);

    if (profileForm.value.$key == null) {
      this.profileService.insertProfile(profileForm.value);
    } else {
    // this.profileService.updateProfile(profileForm.value);
    }

    this.resetForm(profileForm);
    this.toastr.success('Subscripció Exitosa', 'Perfil Registrado');
  }

  resetForm(profileForm?: any) {
    if (profileForm != null) {
      profileForm.reset();
    }
      this.profileService.selectedProfile = new Profile();
  }


}
