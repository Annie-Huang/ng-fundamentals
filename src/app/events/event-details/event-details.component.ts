import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {EventService} from '../shared/event.service';
import {IEvent, ISession} from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container {padding-left: 20px; padding-right: 20px;}
    .event-image {height: 100px;} 
    a {cursor: pointer;}
  `]
})
export class EventDetailsComponent implements OnInit {
  // event: any;
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(private eventService: EventService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // So it's very important to understand that whenever you are subscribing to the route parameters, and basically using that as
    // navigation to a different page within the same component, you need to keep track of all the different pieces of state
    // that exist in the page, in this case adMode. It's often easy to tell just by going up here and looking at what properties exist.
    // Normally your state's going to be in these properties, so the event is a piece of state. AddMode is a piece of state.
    // How we're filtering and sorting, those could also be pieces of state as well. We might want to reset those as well.
    this.route.params.forEach((params: Params) => {
      // // Need to convert string into a number:
      // // this.event = this.eventService.getEvent(+params['id']);
      // this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
      //   this.event = event;
      //   this.addMode = false;
      // });
      this.event = this.route.snapshot.data['event'];
      this.addMode = false;

      // this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });

    // But when we navigate from /1 to /4, what Angular does not do is reset the entire state of the component, and reinitialize it,
    // reconstruct it. No, it stays there. It leaves the same component initialized. Instead, all that happens is that the param for
    // the ID changes. It's taking advantage of the fact that parameters for your route are actually exposed as an observable.
    // Here we're using the snapshot, which is not an observable.

    // // this will cause the problem in your modal (leave it empty and click search), when you choose different session, the underneath page
    // // will not be change say, from http://localhost:4200/events/5 to http://localhost:4200/events/1
    // this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    // Interesting, didn't know you can write it like this:
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }
}
