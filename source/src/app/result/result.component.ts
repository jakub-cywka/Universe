import { Component, OnInit } from '@angular/core';
import { data } from '../search/search.component';
import { Router } from '@angular/router';

export let image: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  data: any[] = data;
  dataLength: number;
  constructor(private router: Router) {
    this.dataLength = this.data.length;
  }

  showDetails(_image: any) {
    image = _image;
    this.router.navigateByUrl('details');
  }

  ngOnInit() { }

}
