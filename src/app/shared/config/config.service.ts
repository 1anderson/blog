import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  private config;
  private themes;
  constructor() {
      this.config = {
        BASEURL: "http://localhost:3000",
        ENDPOINT: {
          POST:'post',
          CATEGORY:'category',
          SUBCATEGORY: 'subcategory',
          USER: 'user',
          AUTHOR: 'author',
          THEME: 'theme'
        }
      }
      this.themes = {
        DARKTHEME: {
          'border-effects-color':'skyblue',
          'background-color':'black',
          'font-color':'white'
        },
        LIGHTHEME: {
          'border-effects-color':'skyblue',
          'background-color':'white',
          'font-color':'black'
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

  getThemes() {
    return this.themes;
  }

}
