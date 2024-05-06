import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private moedaDeSource = new BehaviorSubject<string>('BRL');
  private moedaParaSource = new BehaviorSubject<string>('USD');

  moedaDe$ = this.moedaDeSource.asObservable();
  moedaPara$ = this.moedaParaSource.asObservable();

  setMoedaDe(moeda: string) {
    this.moedaDeSource.next(moeda);
  }

  setMoedaPara(moeda: string) {
    this.moedaParaSource.next(moeda);
  }

  private apiKey = '2e3f8d14d2-2c5fe0d06c-sd0p0s'
  // chama a api
  constructor(private http : HttpClient) {  }

  realizarConversao() : Observable<any>{

    const url = "https://api.fastforex.io/convert?api_key=${apiKey}"


    /*Na linha abaixo altere a '?' por '&'

    let params= &from=${conversao.moedaDe}&to=${conversao.moedaPara}&amount=${}*/

    return this.http.get<any>(url)
  }
}
