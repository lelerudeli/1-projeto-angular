import { Component, OnInit } from '@angular/core';
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
  verValorConvertido!: boolean;
  

  constructor (private currencyConverterService: CurrencyConverterService){
    this.formulario = new FormGroup({
      valor: new FormControl(),
      moedaDe : new FormControl() ,
      moedaPara : new FormControl()
    })
  }

  ngOnInit(): void {
   this.currencyConverterService.convertCurrency('USD', 'BRL', 1).subscribe(result => {
    console.log(result)
   })
   this.verValorConvertido = false;
  }

  Converter() : void {
    console.log(this.formulario.value)
    }
  }

  

