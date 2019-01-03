import { Component, OnInit } from '@angular/core';

import { image } from '../result/result.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  image: any = image;
  shouldExpandView = false;
  constructor() {
    if (this.image) {
      console.log(this.image);
    }
  }

  expandView() {
    this.shouldExpandView = true;
  }

  ngOnInit() {
  }

}
