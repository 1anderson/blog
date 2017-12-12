import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Post } from '../shared/post';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private postList;
  
  constructor( private crudService: CrudService ) {}
 
  ngOnInit() {
    this.crudService.get('').subscribe((data) => this.postList = data ,
    (err)=> console.log(err) );
   }

}
