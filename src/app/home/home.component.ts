import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Post } from '../shared/entities/post';
import { ConfigService } from '../shared/config/config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private postList$;

  constructor( private crudService: CrudService, private configService: ConfigService ) {}

  ngOnInit() {
    this.postList$ = this.crudService.get<Post>(this.configService.getEndPoints().POST, '');
  }

}
