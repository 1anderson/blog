import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  private navItens = [{name: 'Desenvolvimento', link: '/games'}, {name: 'Games', link: '/games'},{name: 'Psicologia', link: '/psicologia'}];
  constructor() { }

  ngOnInit() {
  
  
  }

}
