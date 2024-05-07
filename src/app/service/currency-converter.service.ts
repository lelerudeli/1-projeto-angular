import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrencyConverterService {

  private apiURl = 'https://api.fastforex.io/convert'
  private apiKey = 'fb65731cb8-297001f286-sd4cu9'

  constructor(private http: HttpClient) { }

  convertCurrency(from: string, to: string, amount: number): Observable<any>{

    const url = '${this.apiURl}?from=${from}&to=${to}&amount=${amount}&api_Key=${this.apiKey}'

    return this.http.get<any>(url)
}}
