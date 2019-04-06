import {Component, OnInit} from '@angular/core';
import {AuthService} from './user/auth.service';

/*
The reason why /assets/ works is because in angular.json,
in the projects/ng-fundamentals/architect/build section, it has
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],

For styles and script use the below session:
            "styles": [
              "src/styles.css"
            ],
            "scripts": [],
 */
// template: `
//     <nav-bar></nav-bar>
//     <event-list></event-list>
//   `
@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent implements OnInit {
  constructor(private auth: AuthService) {
  }

  // The application is initialized, which is one of the things that happens when we do a hard refresh in the browser
  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}
