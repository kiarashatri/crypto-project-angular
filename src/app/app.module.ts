import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { ContainerComponent } from './features/manager/container/container.component';
import { HeaderComponent } from './features/manager/header/header.component';
import { TableComponent } from './features/manager/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { AddCurrencyComponent } from './features/manager/add-currency/add-currency.component';
import { AddCurrencyModalComponent } from './features/manager/add-currency-modal/add-currency-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    TableComponent,
    FooterComponent,
    TitleComponent,
    AddCurrencyComponent,
    AddCurrencyModalComponent,
  ],
  imports: [BrowserModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
