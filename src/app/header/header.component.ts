import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  private navItens = [{name: 'desenvolvimento', link: '/games'}, {name: 'games', link: '/games'}];
  constructor() { }

  ngOnInit() {
  
  
  }

}
