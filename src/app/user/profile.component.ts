import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Toastr, TOASTR_TOKEN} from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  // add that decorator inject, and it's parameter as you can see is a token.
  // I'm going to use the Toastr token here, and that tells Angular, for this Toastr variable, that we are creating,
  // that is going to be a private member of this class.
  // You're going to get your value by using the Toastr token to look up the service in the dependency injection registry.
  constructor(private router: Router, private authService: AuthService, @Inject(TOASTR_TOKEN) private toastr: Toastr) {
  }

  ngOnInit(): void {
    // https://angular.io/api/forms/Validators
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      // this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      // // this.router.navigate(['events']);
      // this.toastr.success('Profile Saved');

      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success('Profile Saved');
        });
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    // this.lastName.invalid && this.lastName.touched;
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }

}
