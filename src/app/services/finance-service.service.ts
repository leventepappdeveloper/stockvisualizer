import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class FinanceServiceService {

  private url = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=';
  private endUrl = '&apikey=V03EGS54OMURLU8W';
  private dataUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=full&symbol='

  constructor(private http: HttpClient) {

  }

  search(keyword: string) {
    return this.http.get<any[]>(`${this.url}${keyword}${this.endUrl}`)
  }

  getData(term: string) {
    return this.http.get<any[]>(`${this.dataUrl}${term}${this.endUrl}`)
  }
}
