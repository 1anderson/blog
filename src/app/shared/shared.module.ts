import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from './crud.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers:[
    CrudService
  ],
  exports: []
})
export class SharedModule { }
