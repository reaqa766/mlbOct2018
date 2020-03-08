import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//  Service
import { FirebaseService } from '../../../../services/firebase.service';

// Class
import { Profile } from '../../../../app/models/profile';

// toastr
import { ToastrService } from 'ngx-toastr';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  isLoading: boolean;

  constructor(private profileService: FirebaseService,
    public router: Router,
    private flashMensaje: FlashMessagesService,
    private toastr: ToastrService, private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.profileForm = this.fb.group({
      'name': [null, Validators.required],
      'lastname': [null, Validators.required],
      'instagram': [null, Validators.required],
      'gender': [null, Validators.required],
      'birthDate': [null, Validators.required],
      'country': [null, Validators.required],
      'city': [null, Validators.required],
      'team': [null, Validators.required],
      'isFantasy': [null, Validators.required]
    });
    this.profileService.getProfiles();
    this.resetForm();
    this.isLoading = false;
  }
  async onSubmit(profileForm: any) {
    if (profileForm.value.$key == null) {
      try {
        const { uid, email } = await this.authService.currentUserObservable.take(1).toPromise();
        const newProfile = { ...profileForm.value, email };
        await this.userService.createProfile(uid, newProfile);
      } catch (error) {
        this.toastr.error(error.message)
      }
    } else {
      // this.profileService.updateProfile(profileForm.value);
    }

    this.resetForm(profileForm);
    // this.toastr.success('Datos Guardados', 'Registre Correo y Contraseña');
    this.flashMensaje.show('Ha completado el concurso exitosamente, estas participando', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/']);
    // this.router.navigate(['/register']);
  }

  resetForm(profileForm?: any) {
    if (profileForm != null) {
      profileForm.reset();
    }
    this.profileService.selectedProfile = new Profile();
  }


}
