/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private apiKey = '2e3f8d14d2-2c5fe0d06c-sd0p0s'
  // chama a api
  constructor(private http : HttpClient) {   }

  realizarConversao() : Observable<any>{

    const url = "https://api.fastforex.io/convert?api_key=${apiKey}"


    /*Na linha abaixo altere a '?' por '&'

    let params= &from=${conversao.moedaDe}&to=${conversao.moedaPara}&amount=${}

    return this.http.get<any>(url)
  }
}
*/