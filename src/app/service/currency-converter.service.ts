import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CurrencyConverterService {

  private apiUrl = 'https://api.fastforex.io/convert';
  private apiKey = 'b018b43b00-c4b1e2f799-sdeecl';

  constructor(private http: HttpClient) { }

  //criando função para conversão utilizando api externa
  convertCurrency(from: string, to: string, amount: number): Observable<any>{

    const url = `${this.apiUrl}?from=${from}&to=${to}&amount=${amount}&api_key=${this.apiKey}`;

    //fazendo solicitação http.get para a url e retornando observable para ser "assinada"
    return this.http.get<any>(url);
  }
}

/* retornando um objeto observável que, quando inscrito (ou seja, quando você chama o método .subscribe() nele), 
irá disparar uma requisição HTTP GET para o URL especificado. (para preencher os valores)
Após receber uma resposta do servidor, esse objeto observável irá emitir essa resposta.
Isso permite lidar de forma assíncrona com o ciclo de requisição/resposta HTTP.*/