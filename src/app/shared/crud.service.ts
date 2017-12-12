import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Post } from '../shared/post';
@Injectable()
export class CrudService {

  constructor(private http: HttpClient) {}
  
  get(url, opts?){
    return this.http.get("assets/mock.json").map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  };  
  }

