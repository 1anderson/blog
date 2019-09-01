import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudService } from './crud.service'
import { HttpClientModule } from '@angular/common/http';
import { ConfigService } from './config/config.service';
import { InvalidMessageDirective } from './directives/invalid-message.directive';
import { InvalidTypeDirective } from './directives/invalid-type.directive';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { SubcategoryComponent } from './modals/subcategory/subcategory.component';
import { CategoryComponent } from './modals/category/category.component';
import { ThemeComponent } from './modals/theme/theme.component';
import {MatFormFieldModule} from '@angular/material';
import {MatDialogModule} from "@angular/material";
import { FormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule

  ],
  declarations: [InvalidMessageDirective, InvalidTypeDirective, SanitizeHtmlPipe, SubcategoryComponent, CategoryComponent, ThemeComponent],
  providers:[
    CrudService,
    ConfigService
  ],
  entryComponents:[ ThemeComponent, CategoryComponent ],
  exports: [InvalidMessageDirective, InvalidTypeDirective, SanitizeHtmlPipe,FormsModule,MatInputModule,ReactiveFormsModule,MatSelectModule]
})
export class SharedModule { }
