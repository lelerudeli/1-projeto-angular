import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CurrencyConverterService } from '../../service/currency-converter.service';
import { CurrencySelectorComponent } from '../currency-selector/currency-selector.component';
import { ResultDisplayComponent } from '../result-display/result-display.component';


@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencySelectorComponent, ResultDisplayComponent],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent {
  
  formulario: any;

  //botão para reutilização, basta colocar @Input e chamar ele no html
  @Input() textButton: string = '';
  @Input() typeBtn!: 'solid-primary' | 'solid-secondary';

  //recebendo os valores do select 
  @ViewChild(CurrencySelectorComponent) moedaFrom!: CurrencySelectorComponent;
  @ViewChild(CurrencySelectorComponent) moedaTo!: CurrencySelectorComponent;

  conversionResult! : any;
  viewResult!: boolean;


              //inicializando service para podemos utilizar ele nessa classe
  constructor (private currencyConverterService: CurrencyConverterService){
    this.formulario = new FormGroup({ //inicializando meu formulario
      amount: new FormControl(Validators.required)
    })
  }

  convert() : void {
    //passando todos os valores de conversão para variáveis locais
    const valor = this.formulario.value.amount;
    const from = this.moedaFrom;
    const to = this.moedaTo;

    //passando variaveis para a função do service (que usa api externa para realizar conversão)
    this.currencyConverterService.convertCurrency(from.moedaFrom, to.moedaTo, valor).subscribe(response => {      
      this.conversionResult = (valor * response.result.rate).toFixed(2)
      this.viewResult = true;
     })
    }
  }
  

  /*
  console.log(response)
  console.log(response.result.to)
  console.log(response.result.moedato)
  console.log(response.result.to.moedaTo
  */

