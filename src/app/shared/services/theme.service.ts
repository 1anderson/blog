import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes = {};

  constructor(private configService: ConfigService) {
    this.themes = configService.getThemes();
  }

  toogleDark() {
    this.setTheme(this.themes['DARKTHEME']);
  }

  toggleLight() {
    this.setTheme(this.themes['LIGHTHEME']);
  }

  private setTheme(theme={}) {
    Object.keys(theme).forEach(k =>{
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    })
  }
}
