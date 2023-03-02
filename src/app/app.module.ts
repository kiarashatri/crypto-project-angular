import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContainerComponent } from './features/manager/container/container.component';
import { HeaderComponent } from './features/manager/header/header.component';
import { TableComponent } from './features/manager/table/table.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { AddCurrencyComponent } from './features/manager/add-currency/add-currency.component';
import { AddCurrencyModalComponent } from './features/manager/add-currency-modal/add-currency-modal.component';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule,
    HttpClientModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
