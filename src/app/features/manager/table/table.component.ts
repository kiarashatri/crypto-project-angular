import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  currencies = [
    {
      id: 1,
      name: 'BTC',
      price: 100,
      email: 'test@gmail.com',
    },
  ];

  constructor() {}
}
