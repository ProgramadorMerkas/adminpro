import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme:any = document.querySelector('#theme');
  constructor() { 
    const url = localStorage.getItem('theme') || './assets/css/colors/default.css';
    this.linkTheme?.setAttribute('href' , url);
  }

  changeTheme(theme:string)
  {
      const urlLink:string  = `./assets/css/colors/${theme}.css`;
      this.linkTheme.setAttribute('href' , urlLink);
      this.checkCurrentTheme();

  }
  checkCurrentTheme():void{
    const link = document.querySelectorAll('.selector');
    link.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeLink = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');

      if(btnThemeLink === currentTheme)
      {
        elem.classList.add('working');
      }
    });
  }
}
