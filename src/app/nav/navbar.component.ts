import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {EventService, ISession} from '../events/shared';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display: none}}
    li > a.active {color: #F97924;}
  `]
})
export class NavbarComponent {
  searchTerm = '';
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) {
  }

  // Puting it into a onSearch method. And we would call that modal and open it up. That's not what we want to do for one very big reason.
  // That would tightly bind this NavBar component to the implementation of opening up a modal, right?
  // I mean, this is really under the hoods, is having jQuery call its modal method, which is only there because Bootstrap is also part of what's getting loaded.
  // So we don't want that. We want to hide these implementation details behind something else, and a great way to do that would be a directive.
  // onSearch() {
  //   $('#id').modal();
  // }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      // console.log(this.foundSessions);
    });
  }
}
