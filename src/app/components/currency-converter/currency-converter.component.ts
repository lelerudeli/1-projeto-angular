import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent {
  @Input() name: string =''; //dado filho 
  @Input() data!: {email:string, tel: number}

}
