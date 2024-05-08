import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { ResultDisplayComponent } from './components/result-display/result-display.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    ReactiveFormsModule,
    HttpClientModule,
    HeaderComponentComponent, 
    CurrencyConverterComponent, 
    ResultDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
