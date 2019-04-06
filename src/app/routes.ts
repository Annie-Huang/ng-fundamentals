import {Routes} from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  // EventRouteActivator,
  EventsListResolver,
  CreateSessionComponent,
  EventsResolver
} from './events/index';
import {Error404Component} from './errors/404.component';

// resolve: {event: EventsListResolver}
//  Okay, so basically, what this is saying is, before resolving this route, call this event list resolver,
//  and when that resolver finishes and returns us some data, add this data to the route as a property named events.
export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
  // { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventsResolver} },
  { path: 'events/session/new', component: CreateSessionComponent},
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: './user/user.module#UserModule'}
];
