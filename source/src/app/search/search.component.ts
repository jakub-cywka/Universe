import { Component, OnInit } from '@angular/core';
import Axios from 'axios';
import { Router } from '@angular/router';

export let data: any[];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public data: any[];
  public typed: string;
  public apiUrl: 'https://images-api.nasa.gov/search';
  public shouldCreateModal = false;
  constructor(private router: Router) { }

  public getImage(event?: KeyboardEvent) {
    // the user clicked on input
    if (event) {
      if (event.key === 'Enter') {
        if (this.typed !== '' || this.typed !== null || this.typed !== undefined) {
          Axios.get(`https://images-api.nasa.gov/search?q=${this.typed}&media_type=image`).then(response => {
            this.data = response.data.collection.items;
            data = this.data;
            this.router.navigateByUrl('result');
          });
        }
      }
      // Btn case
    } else {
      if (this.typed !== '' || this.typed !== undefined || this.typed !== null) {
        Axios.get(`https://images-api.nasa.gov/search?q=${this.typed}&media_type=image`).then(response => {
            this.data = response.data.collection.items;
            data = this.data;
            this.router.navigateByUrl('result');
          });
      }
    }
  }
  ngOnInit() {
  }

}
