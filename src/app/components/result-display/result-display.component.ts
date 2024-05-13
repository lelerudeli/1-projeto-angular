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

  @Input() viewResult!: boolean
  @Input() conversionResult! : number;

}
