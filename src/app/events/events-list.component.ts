import {Component} from '@angular/core';
import {EventService} from './shared/event.service';

// <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
//   <h3>{{thumbnail.someProperty}}</h3>
// <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
@Component({
  selector: 'event-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent {
  events: any[];

  // Remember this private syntax right here is shorthand for saying essentially that we have a property on our class like this
  // and like we are saying:
  // eventService
  // (inside the constructor: this.eventService = eventService.
  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }

}
