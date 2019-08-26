import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from './crud.service'
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { InvalidMessageDirective } from './directives/invalid-message.directive';
import { InvalidTypeDirective } from './directives/invalid-type.directive';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [InvalidMessageDirective, InvalidTypeDirective, SanitizeHtmlPipe],
  providers:[
    CrudService,
    ConfigService
  ],
  exports: [InvalidMessageDirective, InvalidTypeDirective, SanitizeHtmlPipe]
})
export class SharedModule { }
