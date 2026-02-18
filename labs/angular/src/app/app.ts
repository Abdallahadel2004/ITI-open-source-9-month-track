import { Component } from '@angular/core';
import { TemperatureConverter } from './Day2/temperature-converter/temperature-converter';
import { NameInput } from './Day2/name-input/name-input';
import { ImageSlider } from './Day2/image-slider/image-slider';

@Component({
  selector: 'app-root',
  imports: [TemperatureConverter, NameInput, ImageSlider],
  templateUrl: './app.html'
})
export class App {}
