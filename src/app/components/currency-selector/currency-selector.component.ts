import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [CommonModule, CurrencyConverterComponent, ReactiveFormsModule, FormsModule, DropdownModule],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.css'
})
export class CurrencySelectorComponent { 

  //variaveis do ViewChild
  moedaFrom : string = 'BRL';
  moedaTo: string = 'USD';

  
  /*
  
  https://primeng.org/dropdown
  
  moedas: SelectItem[];
  selectedOption!: string;

  constructor(){
    this.moedas = [];

      this.moedas.push({label: 'Real', value: {id: 1, name: 'Real', code: 'BRL'}});
      this.moedas.push({label: 'Dólar', value: {id: 2, name: 'Dólar', code: 'USD'}});

  }

  SwapCurrencies():void{
    this.moedaFrom = this.moedaTo;
    this.moedaTo = this.moedaFrom;
  }*/
}
