import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';
import {EventService} from './shared/event.service';
import {map} from 'rxjs/operators';

@Injectable()
export class EventsListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {
  }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
