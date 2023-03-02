import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from '../interface/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  constructor(private http: HttpClient) {}

  getAllCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(
      process.env['API_BASE_URL'] + '/crypto-currencies'
    );
  }

  // getOnesCurrencies(id: number): Observable<Currency> {}

  // insertCurrency(): Observable<Currency> {}

  // updateCurrency(id: number): Observable<Currency> {}

  // deleteCurrency(id: number): Observable<Currency> {}
}
