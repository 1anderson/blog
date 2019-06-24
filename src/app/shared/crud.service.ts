import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Post } from './entities/post';
import { ConfigService } from './config/config.service';
@Injectable()
export class CrudService {
  private ulrBase;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.ulrBase = this.configService.getUrlBase();
  }
  
  get( entity, url, opts? ) {
    return this.http.get(`${this.ulrBase}/${entity}`).map((res: Response) => res)
      .catch((error: any) => Observable.throw(error || 'Server error'));
  };
  
  post(data, opts?) {
      const options = {} as any;
      console.log("DATA",data);
      return this.http.post("http://localhost:3000/post",data,options).subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );;
  }
  }

