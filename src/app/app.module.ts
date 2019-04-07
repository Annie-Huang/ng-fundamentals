import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  // EventRouteActivator,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  EventsResolver
} from './events/index';
import { EventsAppComponent } from './events-app.component';
import {NavbarComponent} from './nav/navbar.component';
// import {ToastrService} from './common/toastr.service';
// import {Toastr, TOASTR_TOKEN} from './common/toastr.service';
// import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {
  Toastr,
  TOASTR_TOKEN,
  CollapsibleWellComponent,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// what this statement is, this is just a little statement using TypeScript to say that there's already a global Toastr object,
// so that I can use it inside of my TypeScript and I don't get any errors.
// declare let toastr: any;
const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

// AuthService: Well, that's because providers are shared across Angular modules. So if we add it in our app module,
// it will be available for us to use here without having to register it as a provider in this module.    << UserModule.
// It's worth nothing that while this is true for providers, it is not true for imports and declarations.

// This is another important strategy when going to production when trying to tune the performance of your application is
// to preload modules when you can and also to make your initial module as small as possible.
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    EventService,
    // ToastrService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    // EventRouteActivator,
    EventsResolver,
    EventsListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    VoterService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
