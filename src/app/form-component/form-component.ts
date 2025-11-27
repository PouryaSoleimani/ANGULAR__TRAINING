import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [FormsModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {
  // STATES
  public username: string = '';
  public email: string = '';
  public phoneNumber: string = '';
  public isValid = false
  // FUNCTIONS
  public SubmitHandler = (username: string) => {
    if (username.length == 0) return
    console.info('USER LOGGED IN ...')
    this.isValid = true
    this.username = ''
  };
}
