import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConversorService } from '../../service/conversor.service';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [CommonModule, CurrencyConverterComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.css'
})
export class CurrencySelectorComponent { 

  moedaDe : string ='BRL'
  moedaPara : string ='USD'

  constructor(private currencyService: ConversorService) {}

  selecionarMoedaDe(moeda: string) {
    this.currencyService.setMoedaDe(moeda);
  }

  selecionarMoedaPara(moeda: string) {
    this.currencyService.setMoedaPara(moeda);
  }


  /*show: boolean = false

  showMessage():void{
    this.show = !this.show; //toggle  
  }*/
}
