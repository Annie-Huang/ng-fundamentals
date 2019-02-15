import { Component } from '@angular/core';

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
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
