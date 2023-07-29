import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coutry } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private _http: HttpClient) {}

  searchCapital(term: string): Observable<Coutry[]> {
    return this._http.get<Coutry[]>(`${this.apiUrl}/capital/${term}`);
  }
}
