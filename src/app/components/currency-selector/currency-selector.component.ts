import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency-selector.component.html',
  styleUrl: './currency-selector.component.css'
})
export class CurrencySelectorComponent {
  
  options!: string
  selectedOption!: string 

  selectOption(option: string): void {
    this.selectedOption = option;
  
}
  
  /*show: boolean = false

  showMessage():void{
    this.show = !this.show; //toggle  
  }*/
}
