import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from './crud.service'
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { InvalidMessageDirective } from './directives/invalid-message.directive';
import { InvalidTypeDirective } from './directives/invalid-type.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [InvalidMessageDirective, InvalidTypeDirective],
  providers:[
    CrudService,
    ConfigService
  ],
  exports: [InvalidMessageDirective, InvalidTypeDirective]
})
export class SharedModule { }
