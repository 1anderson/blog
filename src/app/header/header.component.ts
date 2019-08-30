import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

import { ThemeService } from '../shared/services/theme.service';
import { CrudService } from '../shared/crud.service';
import { ConfigService } from '../shared/config/config.service';
import { Theme } from '../shared/entities/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  private navItens$: Observable<Theme[]>;
  private lightheme = new FormControl(false);
  private nav2 = [];
  constructor(private themeService: ThemeService, private crudService: CrudService, private configService: ConfigService ) { }

  ngOnInit() {
    this.lightheme.valueChanges
      .subscribe(value => {
        if(value){
          this.themeService.toggleLight();
        }
        else {
          this.themeService.toogleDark();
        }
      });
      this.navItens$ = this.crudService.get<Theme>(`${this.configService.getEndPoints().THEME}`,'');
  }

}
