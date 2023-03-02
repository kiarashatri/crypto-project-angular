import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.scss'],
})
export class AddCurrencyComponent {
  addCurrencyModalVisibility: boolean = true;

  isLoadingRequest: boolean = false;

  currencyName: string = '';
  email: string = '';
  description: string = '';

  emailFieldError: boolean = false;
  nameFieldError: boolean = false;

  inputErrorMessages: string[] = [];

  test = '';

  constructor(private messageService: MessageService) {}

  resetInputErrors(): void {
    // clear errors
    this.emailFieldError = false;
    this.nameFieldError = false;
    this.inputErrorMessages = [];
  }
  resetClassStateValue(): void {
    // set form values to null
    this.email = '';
    this.currencyName = '';
    this.description = '';

    // clear errors
    this.resetInputErrors();
  }

  addCurrencyBtnHandler(): void {
    // resetStateValues
    this.resetClassStateValue();

    // set modal visible
    this.addCurrencyModalVisibility = true;
  }

  formValidator(name: string, email: string): boolean {
    let error: boolean = true;

    // validation for name -> must between 3 and 15 characters
    const nameCheck = this.nameInputValidator(name);
    if (nameCheck !== true) {
      error = false;
      this.nameFieldError = true;
      this.inputErrorMessages.push(String(nameCheck));
    }

    // email validator
    const emailCheck = this.emailInputValidator(email);
    if (emailCheck !== true) {
      error = false;
      this.emailFieldError = true;
      this.inputErrorMessages.push(String(emailCheck));
    }

    return error;
  }

  emailInputValidator(email: string): string | boolean {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      ? true
      : 'Wrong Email';
  }

  nameInputValidator(name: string): string | boolean {
    return name.length < 3 || name.length > 15
      ? 'Name Must Between 3 - 10 characters'
      : true;
  }

  submitFormHandler(): void {
    this.resetInputErrors();
    const validation = this.formValidator(this.currencyName, this.email);
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
    });
  }
}
