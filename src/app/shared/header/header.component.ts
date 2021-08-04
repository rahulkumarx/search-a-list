import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() search = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  enterKey(event: any) {
    if (event) {
      const key = event.target.value
      this.search.emit(key)
    }
  }
}
