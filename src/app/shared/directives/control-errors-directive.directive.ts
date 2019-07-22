import { Directive, Self, InjectionToken } from '@angular/core';
import { NgControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirectiveDirective {

  constructor(@Self() private control: NgControl) { }

  ngOnInit() {
    this.control.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      // handle errors
    })
  }

}

export const defaultErrors = {
  required: (error) => `This field is required`,
  minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', { providedIn: "root", factory: () => defaultErrors } );

