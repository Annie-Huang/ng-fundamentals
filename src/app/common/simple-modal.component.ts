import {Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Component({
  selector: 'simple-modal',
  template: `
    <!--<div id="simple-modal" class="modal fade" tabindex="-1">-->
    <div id="{{elementId}}" #modalcontainer class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
            <h4 class="modal-title">{{title}}</h4>
          </div>
          <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-body {height: 250px; overflow-y: scroll;}
  `]
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;

  // ViewChild DECORATOR
  // Property decorator that configures a view query.
  // The change detector looks for the first element or the directive matching the selector in the view DOM.
  // If the view DOM changes, and a new child matches the selector, the property is updated.
  @ViewChild('modalcontainer') containerEl: ElementRef;

  constructor(@Inject(JQ_TOKEN) private $: any) {
  }

  closeModal() {
    // So now we got jQuery, and of course it'll be this, and now we want the raw DOM element that this container El wraps,
    // so we call this.container. El. nativeElement, and we're getting the underlying DOM element that this container El points to,
    // which is found by looking up the ref for modalcontainer.
    // So that's another way of accessing a specific DOM node. And it's a much nicer way to get ahold of a specific DOM node, rather than
    // getting the parent element ref, and then perhaps drilling down through something like getting elements by class name, for example.
    this.$(this.containerEl.nativeElement).modal('hide');
  }
}
