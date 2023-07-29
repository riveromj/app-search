import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  sendTerm(term: string): void {
    console.log(`emitiendoooo ${term}`);
    this.onValue.emit(term);
  }
}
