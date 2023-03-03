import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CurrenciesService } from 'src/app/service/currencies.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  isFetched: boolean = false;

  currencies: any = {};
  currenciesObjecyKeys: string[] = [];

  constructor(
    private messageService: MessageService,
    private currenciesService: CurrenciesService
  ) {
    this.currencyInfoFetcherInterval();
  }

  currencyInfoFetcherInterval(cycle: number = 2000) {
    setInterval(() => {
      let response: any;
      this.currenciesService.getAllCurrencies().subscribe({
        next: (requestResult) => (response = requestResult),
        error: (error) => this.fetchAllCurrenciesErrorHandler(error),
        complete: () => this.fetchAllCurrenciesCompleteHandler(response),
      });
    }, cycle);
  }

  currencyDeleteHandler(id: number): void {
    let response: any;
    this.currenciesService.deleteCurrency(id).subscribe({
      next: (values) => (response = values),
      complete: () => this.currencyDeleteCompleteHandler(id),
      error: (error) => this.currencyDeleteErrorHandler(error),
    });
  }

  currencyDeleteErrorHandler(error: any): void {
    this.messageService.add({
      severity: 'error',
      summary: error?.name,
      detail: error?.statusText,
    });
  }

  currencyDeleteCompleteHandler(id: number): void {
    this.currencies = this.currencies.filter(
      (currency: any) => currency.id !== id
    );

    this.messageService.add({
      severity: 'success',
      summary: 'Currency Deleted',
      detail: `Successfully Deleted`,
    });
  }

  fetchAllCurrenciesErrorHandler(error: any) {
    this.messageService.add({
      severity: 'error',
      summary: error?.name,
      detail: error?.statusText,
    });
  }

  fetchAllCurrenciesCompleteHandler(response: any) {
    response.forEach((currencyInfo: any) => {
      this.currencies[currencyInfo.id] = {
        ...this.currencies[currencyInfo.id],
        ...currencyInfo,
      };
    });
    this.currenciesObjecyKeys = Object.keys(this.currencies);
    this.isFetched = true;
  }
}
