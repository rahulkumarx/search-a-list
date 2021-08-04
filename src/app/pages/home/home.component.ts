import {EventEmitter} from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';
import {SAVED_LIST} from "../../shared/json/json-d";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  savedList = SAVED_LIST;
  searchKey: any;
  prevIndex: any;
  descriptions: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  searchText(event: any) {
    this.descriptions = [];
    this.searchKey = event;
  }

  getDetails(i: number, description: []) {
    if (i !== this.prevIndex) {
      this.prevIndex = i;
      this.descriptions = description;
    } else {
      this.prevIndex = '';
      this.descriptions = [];
    }
  }
}
