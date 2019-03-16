import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IEvent} from './shared';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name | uppercase}}</h2>
      <div>Date: {{event?.date}}</div>
      <!--<div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">-->
      <!--<div [ngClass]="{green: event?.time === '8:00 am', bold: event?.time === '8:00 am'}" [ngSwitch]="event?.time">-->
      <!--<div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">-->
      <!--<div [style.color]="event?.time === '8:00 am' ?  '#003300' : '#bbb'" [ngSwitch]="event?.time">-->
      <!--<div [ngStyle]="{'color': event?.time === '8:00 am' ? '#003300' : '#bbb', 'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'}" [ngSwitch]="event?.time">-->
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Locations: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>
    </div>
  `,
  styles: [`
    .green {color: #003300 !important; }
    .bold { font-weight: bold; }
    .thumbnail {min-height: 210px;}
    .pad-left {margin-left: 10px;}
    .well div {color: #bbb;}
  `]
})
export class EventThumbnailComponent {
  // @Input() event: any;
  @Input() event: IEvent;

  // someProperty: any = 'some value';
  //
  // logFoo() {
  //   console.log('foo');
  // }

  getStartTimeClass() {
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return {green: isEarlyStart, bold: isEarlyStart };

    // // Or
    // if (this.event && this.event.time === '8:00 am') {
    //   return 'green bold';
    // }
    // return '';

    // Or
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}
