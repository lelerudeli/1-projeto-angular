import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
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

  @Input() moedaFrom : string =''
  @Input() moedaTo : string =''

  constructor(private currencyConverterService: CurrencyConverterService) {}


  /*show: boolean = false

  showMessage():void{
    this.show = !this.show; //toggle  
  }*/
}
