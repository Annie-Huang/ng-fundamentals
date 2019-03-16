import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[] = [];

  // This ngOnChanges method is going to be called every time one of the input variables to this component gets a new value.
  // ngOnChanges(changes: SimpleChanges): void {
  ngOnChanges(): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      // clone the sessions array
      this.visibleSessions = this.sessions.slice(0);

    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }

  }
}
