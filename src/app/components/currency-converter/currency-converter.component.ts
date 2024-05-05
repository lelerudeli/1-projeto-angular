import { Component, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CurrencySelectorComponent } from '../currency-selector/currency-selector.component';


@Component({
  selector: 'app-currency-converter',
  standalone: true,
  imports: [CurrencySelectorComponent, 
    ReactiveFormsModule],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent {
  /*@Input() name: string =''; //dado filho 
  @Input() data!: {email:string, tel: number}*/

  formulario: any;
  verValorConvertido!: boolean;

  constructor (){
    this.formulario = new FormGroup({
      valor: new FormControl(),
      moedaDe : new FormControl(),
      moedaPara : new FormControl(),
    })
  }

  ngOnInit(): void {
    this.verValorConvertido = false;
  }

  Converter() : void {

    console.log(this.formulario.value)
    }
  }

