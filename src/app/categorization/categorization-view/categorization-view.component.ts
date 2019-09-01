import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { CategoryComponent } from '../../shared/modals/category/category.component';
import { SubcategoryComponent } from '../../shared/modals/subcategory/subcategory.component';
import { ThemeComponent } from '../../shared/modals/theme/theme.component';
import { Category } from '../../shared/entities/category';
import { Theme } from '../../shared/entities/theme';
import { CrudService } from '../../shared/crud.service';
import { ConfigService } from '../../shared/config/config.service';
//lembrar de criar uma alterantiva para desincrição dos observables;
@Component({
  selector: 'app-categorization-view',
  templateUrl: './categorization-view.component.html',
  styleUrls: ['./categorization-view.component.css']
})
export class CategorizationViewComponent implements OnInit {
  private categories: any;
  private themes: any;
  private value;
  constructor(public dialog: MatDialog, private configService:ConfigService, private crudService: CrudService) {}

  ngOnInit() {
    this.loadCategories();
    this.loadThemes();
  }

 openThemeDialog() {
     const themeDialogRef = this.dialog.open(ThemeComponent, {
       width: '300px',
       data: new Theme(null,'')
    });

    themeDialogRef.afterClosed()
      .subscribe(value => {
        if (value) {
          this.crudService.post(this.configService.getEndPoints().THEME,value)
            .subscribe(value=> {
              console.log(value);
            },err => {
              console.log(err);
            })
        }
    });
 }

  openCategoryDialog() {
      this.dialog.open(CategoryComponent,{
        data: {
          themes: this.themes
        }
      }).afterClosed()
        .subscribe(value => {
          this.crudService.post(this.configService.getEndPoints().CATEGORY,value)
          .subscribe(value=> {
            console.log(value);
          },err => {
            console.log(err);
          })
      });
  }

  openSubcategoryDialog() {

  }

  private loadCategories() {
      this.crudService.get<Category>(this.configService.getEndPoints().CATEGORY)
        .subscribe(categories => {
          console.log("categories", categories);
          this.categories = categories;
      },err => {
        console.log(err);
      });
  }

  private loadThemes() {
    this.crudService.get<Category>(this.configService.getEndPoints().THEME)
      .subscribe(themes => {
        console.log("themes", themes);
        this.themes = themes;
    },err => {
      console.log(err);
    });
}

}
