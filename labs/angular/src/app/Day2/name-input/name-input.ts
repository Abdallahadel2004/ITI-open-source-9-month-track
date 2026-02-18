import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-name-input',
  imports: [FormsModule],
  templateUrl: './name-input.html'
})
export class NameInput {
  firstName :string = '';

  reset() {
    this.firstName = '';
  }
}
