import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { CurrencySelectorComponent } from './components/currency-selector/currency-selector.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponentComponent, CurrencyConverterComponent, IfRenderComponent, CurrencySelectorComponent, ResultDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = "Leticia"; //dado pai 

  userData = {
    email: "letíciarudeli11@gmail.com",
    tel: 989999518 
  }

  title = 'Conversor Moedas';
}
