import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { CrudService } from '../../shared/crud.service';
import { ConfigService } from '../../shared/config/config.service';
import { Post } from '../../shared/entities/post';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  private post$: Observable<any>
  constructor( private crudService: CrudService, private configService: ConfigService,private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
   this.post$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.crudService.get<Post>(`${this.configService.getEndPoints().POST}/${params.get('id')}`,''))
    );
  }

}
