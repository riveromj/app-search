import { Component, Input, OnInit } from '@angular/core';
import { Coutry } from '../../interfaces/country';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss'],
})
export class CountryTableComponent implements OnInit {
  @Input() countries!: Coutry[];

  constructor() {}

  ngOnInit(): void {}
}
