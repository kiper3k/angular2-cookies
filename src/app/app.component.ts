import { Component } from '@angular/core';
import { Cookie } from 'ng2-cookies'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2 Cookies';
  cookies: Object;
  keys: Array<string>;
  addName: string;
  addValue: string;
  deleteName: string;

  constructor() {
    this.update();
  }

  update() {
    this.cookies = Cookie.getAll();
    this.keys = Object.keys(this.cookies);
  }

  addCookie(addName: string, addValue: string) {
    Cookie.set(addName, addValue);
    this.update();
  }

  deleteCookie(deleteName: string) {
    Cookie.delete(deleteName);
    this.update();
  }
}
