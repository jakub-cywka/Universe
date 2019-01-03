import { Component } from '@angular/core';

export const language: string = navigator.language;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    console.log(language);
  }
}
