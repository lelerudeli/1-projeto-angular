import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CurrencyConverterService } from '../../service/currency-converter.service';
import { CurrencySelectorComponent } from '../currency-selector/currency-selector.component';


@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencySelectorComponent],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent implements OnInit{
  
  formulario: any; 

  //recebendo os valores do select 
  @ViewChild(CurrencySelectorComponent) moedaFrom!: CurrencySelectorComponent
  @ViewChild(CurrencySelectorComponent) moedaTo!: CurrencySelectorComponent

              //inicializando service para podemos utilizar ele nessa classe
  constructor (private currencyConverterService: CurrencyConverterService){
    this.formulario = new FormGroup({ //inicializando meu formulario
      amount: new FormControl() 
    })
  }

  ngOnInit(): void {
      
  }

  convert() : void {
    //passando todos os valores de conversão para variáveis locais
    const valor = this.formulario.value.amount
    const from = this.moedaFrom
    const to = this.moedaTo

    //passando variaveis para a função do service (que usa api externa para realizar conversão)
    this.currencyConverterService.convertCurrency(from.moedaFrom, to.moedaTo, valor).subscribe(result => {
      console.log(result)
      console.log(result.result.rate)
      console.log(result.result.moedaTo)
     })
    }
  }
  

