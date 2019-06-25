import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';


@Injectable()
export class ConfigService {
  private config;
  constructor() {
      this.config = {
        BASEURL: "http://localhost:3000",
        ENDPOINT: {
          POST:'post',
          CATEGORY:'category',
          SUBCATEGORY: 'subcategory',
          USER: 'user',
          AUTHOR: 'author'
        }
   }
  }
  getConfig() {
     return this.config;
  }

  getUrlBase() {
    return this.config.BASEURL;
  }

  getEndPoints() {
    return this.config.ENDPOINT;
  }

}
