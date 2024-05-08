import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyConverterService } from '../../service/currency-converter.service';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [CommonModule, CurrencyConverterComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.css'
})
export class CurrencySelectorComponent { 

 @Output() moedaFrom = new EventEmitter
 @Output() moedaTo = new EventEmitter

  constructor(private currencyConverterService: CurrencyConverterService) {}



  /*show: boolean = false

  showMessage():void{
    this.show = !this.show; //toggle  
  }*/
}
