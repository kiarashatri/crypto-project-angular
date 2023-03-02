import { Component } from '@angular/core';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.scss'],
})
export class AddCurrencyComponent {
  addCurrencyModalVisibility = false;

  clickHandler() {
    this.addCurrencyModalVisibility = true;
  }
}
