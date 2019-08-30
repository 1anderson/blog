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

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [InvalidMessageDirective, InvalidTypeDirective, SanitizeHtmlPipe, SubcategoryComponent, CategoryComponent, ThemeComponent],
  providers:[
    CrudService,
    ConfigService
  ],
  exports: [InvalidMessageDirective, InvalidTypeDirective, SanitizeHtmlPipe]
})
export class SharedModule { }
