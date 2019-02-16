import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }
  `]
})
export class LoginComponent {
  userName;
  password;

  constructor(private authService: AuthService, private router: Router) {
  }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }
  // validation includes:
  // loginForm.controls.userName.valid
  // loginForm.controls.userName.invalid
  // loginForm.controls.userName.dirty
  // loginForm.controls.userName.pristine
  // loginForm.controls.userName.touched
  // loginForm.controls.userName.untouched

  cancel() {
    this.router.navigate(['events']);
  }
}
