import { Component, Input} from '@angular/core';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-display',
  standalone: true,
  imports: [CurrencyConverterComponent, CommonModule],
  templateUrl: './result-display.component.html',
  styleUrl: './result-display.component.css'
})
export class ResultDisplayComponent  {

  //importando lá do componente CurrencyConverter 
  @Input() viewResult!: boolean
  @Input() conversionResult! : number;

}
