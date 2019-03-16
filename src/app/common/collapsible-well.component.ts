import {Component, Input} from '@angular/core';

/*
    <div (click)="toggleContent()" class="well pointable">
      <h4 class="well-title">{{title}}</h4>
      <ng-content *ngIf="visiable"></ng-content>
    </div>
 */
@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content *ngIf="visiable" select="[well-body]"></ng-content>
    </div>
  `
})
export class CollapsibleWellComponent {
  @Input() title: string;
  visiable = true;

  toggleContent() {
    this.visiable = !this.visiable;
  }
}
