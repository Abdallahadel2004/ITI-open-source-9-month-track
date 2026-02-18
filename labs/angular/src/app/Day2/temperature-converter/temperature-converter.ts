import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-temperature-converter',
  imports: [FormsModule],
  templateUrl: './temperature-converter.html'
})
export class TemperatureConverter {
  celsius :number | null = null;
  fahrenheit :number | null = null;

  onCelsiusChange(value: string) {
    const c = parseFloat(value);
    if (!isNaN(c)) {
      this.celsius = c;
      this.fahrenheit = Math.round(c * 9 / 5 + 32);
    } else {
      this.celsius = null;
      this.fahrenheit = null;
    }
  }

  onFahrenheitChange(value: string) {
    const f = parseFloat(value);
    if (!isNaN(f)) {
        this.fahrenheit = f;
      this.celsius = Math.round((f - 32) * 5 / 9);
    } else {
      this.fahrenheit = null;
      this.celsius = null;
    }
  }
}
