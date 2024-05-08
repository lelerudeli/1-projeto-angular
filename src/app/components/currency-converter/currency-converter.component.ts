import { Component, OnInit, Output } from '@angular/core';
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

  constructor (private currencyConverterService: CurrencyConverterService){
    this.formulario = new FormGroup({
      amount: new FormControl(),
      moedaFrom : new FormControl() ,
      moedaTo : new FormControl()
    })
  }

  ngOnInit(): void {
  }

  receivingOrigin(moedaFrom:any){
    console.log(moedaFrom)
  }

  receivingDestination(moedaFrom:any){
    console.log(moedaFrom)
  }

  Converter() : void {
    const valor = this.formulario.value.amount
    const from = this.formulario.value.moedaFrom
    const to = this.formulario.value.moedaTo

    this.currencyConverterService.convertCurrency('BRL', 'USD', valor).subscribe(result => {
      console.log(result)
      
     })
    
    console.log(this.formulario.value)
    }
  }

  

