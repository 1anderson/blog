import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  private navItens = [ { name: 'Desenvolvimento',subcategory: [ { name: 'Subcategory-1', link: '/games' }, { name: 'Subcategory-2', link: '/games' } ] },
                       { name: 'Games', subcategory: [ { name: 'Subcategory-1', link: '/games' }, { name: 'Subcategory-2', link: '/games' } ] },
                      //  { name: 'Psicologia', subcategory: [ { name: 'Subcategory-1', link: '/games'}, {name: 'Subcategory-2', link: '/games' } ] }
                     ];
  private lightheme = new FormControl(false);
  constructor(private themeService: ThemeService) { }

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
  }

}
