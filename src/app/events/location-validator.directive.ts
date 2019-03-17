import {Directive} from '@angular/core';
import {FormGroup, Validator} from '@angular/forms';

@Directive({
  selector: '[validateLocation]'
})
export class LocationValidator implements Validator {

  // validate(control: AbstractControl): ValidationErrors | null {
  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countryControl = formGroup.controls['country'];

    // since our validator is on a sibling of the online URL, I'm going to actually go up a level by going to the root,
    // and then I want to get to its controls. Unfortunately the type of root, it's just an abstract control,
    // but I actually know that the type is a form group of the parent if we go and look at this model group, its parent is a form,
    // which we can access as a form group by giving it a type ((<FormGroup>formGroup.root), and now that has a controls property,
    // and I can get the online URL.
    //
    // So that's how we go up a level from the node that we're at (<div class="form-group">),
    // which is going to be again, this node here (<div ngModelGroup="location" validateLocation>), to get a sibling node,
    // so we have this model group right there, and we want this node right here, and to get its online URL.
    // You'll remember, even though we are looking at nodes in here, it's really a tree structure of controls that
    // we're dealing with when we're talking about the form group and its controls and going up to its root.
    const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    if ( (addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value)
      || (onlineUrlControl && onlineUrlControl.value)) {
      return null;

    } else {
      return {validateLocation: false};
    }
  }

}
