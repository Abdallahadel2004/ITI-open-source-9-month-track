import { Component } from '@angular/core';
import { TemperatureConverter } from './Day2/temperature-converter/temperature-converter';
import { NameInput } from './Day2/name-input/name-input';
import { ImageSlider } from './Day2/image-slider/image-slider';
import { Parent } from './Day3/parent/parent';
import { Task2 } from './Day3/task2/task2';
import { Child } from './Day3/child/child';
import { ResponsiveForm } from './Day4/responsive-form/responsive-form';

@Component({
  selector: 'app-root',
  imports: [TemperatureConverter, NameInput, ImageSlider, Parent, Task2, Child, ResponsiveForm],
  templateUrl: './app.html'
})
export class App { }
