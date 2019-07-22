import { Directive, OnInit, Input, TemplateRef, ViewContainerRef, Renderer2, ElementRef,  EmbeddedViewRef } from '@angular/core';
import { InvalidMessageDirective } from './invalid-message.directive';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[invalidType]'
})

export class InvalidTypeDirective implements OnInit {
  @Input('invalidType') typeError: string;

  private hasView = false;
  private theEmbView:EmbeddedViewRef<any>;
  private defaultErrors = {
    required: (error) => `Este campo não pode ser vazio`,
    maxlength: ({ requiredLength, actualLength }) => `O maior número de caracteres do texto é  ${requiredLength} mas o atual valor é ${actualLength}`
  }

  constructor(
    private invalidmessage: InvalidMessageDirective,
    private templateRef:TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private render: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
   this.invalidmessage.controlValue$.subscribe(() => {
      this.setVisible();
    });
  }

  private setVisible() {
    if (this.invalidmessage.match(this.typeError)) {
      if (!this.hasView) {
        this.theEmbView = this.viewContainer.createEmbeddedView(this.templateRef)
        this.theEmbView.rootNodes[0].innerHTML = this.getErrorMessage(this.typeError, this.invalidmessage.control.errors);
        this.render.addClass(this.theEmbView.rootNodes[0], this.getErrorStyle());
        this.hasView = true;
      }
    }else {
      if (this.hasView) {
         this.viewContainer.clear();
         this.hasView = false;
      }
    }
  }

  private getErrorMessage(typeError: string, errorsObject: ValidationErrors): string {
    return this.defaultErrors[typeError](errorsObject[typeError]);
  }

  private getErrorStyle () {
    return  "text-message-error";
  }
}
