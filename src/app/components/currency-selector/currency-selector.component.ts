import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [CommonModule, CurrencyConverterComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.css'
})
export class CurrencySelectorComponent { 

  moedaFrom! : string;
  moedaTo! : string;


  /*SwapCurrencies():void{
    this.moedaFrom = this.moedaTo;
    this.moedaTo = this.moedaFrom;
  }*/
}
