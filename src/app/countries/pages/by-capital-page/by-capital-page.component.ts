import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Coutry } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss'],
})
export class ByCapitalPageComponent implements OnInit {
  public countries: Coutry[] = [];
  constructor(private coutriesService: CountriesService) {}

  ngOnInit(): void {}

  searchByCapital(term: string): void {
    this.coutriesService.searchCapital(term).subscribe((request) => {
      console.log(request);
      this.countries = request;
    });
  }
}
