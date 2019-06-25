import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from './crud.service'
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { ControlErrorsDirectiveDirective } from './directives/control-errors-directive.directive';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ControlErrorsDirectiveDirective],
  providers:[
    CrudService,
    ConfigService
  ],
  exports: []
})
export class SharedModule { }
