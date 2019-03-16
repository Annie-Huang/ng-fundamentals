import {Component, Input} from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well pointable">
      <h4 class="well-title">{{title}}</h4>
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
