import { Component, OnInit } from '@angular/core';
import { data } from '../search/search.component';
import { Router, ActivatedRoute } from '@angular/router';
import { language } from '../app.component';

export let image: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public language: string = language;
  public data: any[] = data;
  public dataLength: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.dataLength = this.data.length;
  }

  public showDetails(_image: any) {
    image = _image;
    this.router.navigateByUrl('details');
  }

  ngOnInit() { }

}
