import {Directive, ElementRef, Inject, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

// Component will be selector: 'XXX'
// Directive will be selector: '[XXX]', because it's an attribute within the element
@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;

  // But we don't want the element ref (ElementRef), because that's kind of a wrapper for the DOM element.
  // We want the actual DOM element. So, we're going to create a new property called el,
  // which is an HTML element, which I haven't imported that.
  // This is just a global Java script type.

  // el is reference to the button element in <button class="btn btn-default" modal-trigger>Search</button>
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', e => {
      this.$('#simple-modal').modal({});
    });
  }
}
