import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  get<T>( entity, url, opts? )  {
    return this.http.get<T[]>(`${this.ulrBase}/${entity}`);
  }

  post<T>(data, opts?) {
      const options = {} as any;
      return this.http.post<T>("http://localhost:3000/post",data,options);
  }

  put(data, opts?) {
    const options = {} as any;
    return this.http.put("http://localhost:3000/post",data,options)
  }

  }

