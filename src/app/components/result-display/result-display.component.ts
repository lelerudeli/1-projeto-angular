import { Component, OnInit, Input} from '@angular/core';
import { CurrencyConverterService } from '../../service/currency-converter.service';
import { CurrencyConverterComponent } from '../currency-converter/currency-converter.component';

@Component({
  selector: 'app-result-display',
  standalone: true,
  imports: [CurrencyConverterComponent],
  templateUrl: './result-display.component.html',
  styleUrl: './result-display.component.css'
})
export class ResultDisplayComponent implements OnInit {

  @Input()
  receiveResult!: number;

  constructor () { }


  ngOnInit(): void {
  
  }
  
  showResult(){
    console.log(this.receiveResult)
    
  }

}
