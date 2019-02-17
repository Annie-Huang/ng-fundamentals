import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  ngOnInit(): void {
    const firstName = new FormControl();
    const lastName = new FormControl();

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

}
