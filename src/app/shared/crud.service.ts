import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import './entities/author';


import { Post } from './entities/post';
import { ConfigService } from './config/config.service';
import { Author } from './entities/author';
@Injectable()
export class CrudService {
  private ulrBase;
  constructor(private http: HttpClient, private configService: ConfigService) {
    this.ulrBase = this.configService.getUrlBase();
  }

  get<T>( entity, queryParams = {} )  {
    let params = new HttpParams();
      for (let [key,value] of Object.entries(queryParams)) {
        params = params.set(key, queryParams[key]);
      }
    return this.http.get<T[]>(`${this.ulrBase}/${entity}`,{ params });
  }

  post<T>(entity, data, opts?) {
      const options = {} as any;
      return this.http.post<T>(`http://localhost:3000/${entity}`,data,options);
  }

  put(data, opts?) {
    const options = {} as any;
    return this.http.put("http://localhost:3000/post",data,options)
  }

  }

