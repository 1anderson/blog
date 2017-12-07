import { Component, OnInit, Input } from '@angular/core';
import { navModel } from './nav-menu-model';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Input() navItens: navModel[];  
  constructor() { }
  
  
  ngOnInit() {

  }

}
