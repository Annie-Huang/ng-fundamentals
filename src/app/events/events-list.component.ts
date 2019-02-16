import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './shared';
// declare let toastr;

// <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
//   <h3>{{thumbnail.someProperty}}</h3>
// <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
@Component({
  // selector: 'event-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  // events: any[];
  // events: any;
  events: IEvent[];

  // Remember this private syntax right here is shorthand for saying essentially that we have a property on our class like this
  // and like we are saying:
  // eventService
  // (inside the constructor: this.eventService = eventService.
  constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // It's really not a good idea to put things in your constructor that are potentially long running.
    // And eventually this will be an ajax call. And so this will take a little while to fetch those events.
    // this.events = this.eventService.getEvents();
    // this.eventService.getEvents().subscribe(event => {
    //   this.events = event;
    // });
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    // toastr.success(eventName);
    this.toastr.success(eventName);
  }

}
