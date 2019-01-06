import { Component, OnInit } from '@angular/core';

import { image } from '../result/result.component';
import { language } from '../app.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public language: string = language;
  public image: any = image;
  public shouldExpandView = false;
  constructor() { }

  public expandView() {
    this.shouldExpandView = true;
  }

  ngOnInit() {
  }

}
