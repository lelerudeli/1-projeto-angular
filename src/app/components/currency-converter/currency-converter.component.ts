import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CurrencySelectorComponent } from '../currency-selector/currency-selector.component';
import { ConversorService } from '../../service/conversor.service';


@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CurrencySelectorComponent, 
    ReactiveFormsModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent implements OnInit{
  /*@Input() name: string =''; //dado filho 
  @Input() data!: {email:string, tel: number}*/

  formulario: any;
  verValorConvertido!: boolean;

  constructor (private currencyService: ConversorService){
    this.formulario = new FormGroup({
      valor: new FormControl(),
      moedaDe : new FormControl(),
      moedaPara : new FormControl()
    })
  }

  ngOnInit(): void {
    this.verValorConvertido = false;
    this.currencyService.setMoedaDe('BRL');
    this.currencyService.setMoedaPara('USD');
  }

  Converter() : void {
    console.log(this.formulario.value)
    }
  }

  

