import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [FormsModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css',
})
export class FormComponent {
  public username: string = '';
  public email: string = '';
  public phoneNumber: string = '';

  public SubmitHandler = (username: string, email: string, phoneNumber: string) => {
    console.log('username =>', username, '|', 'email =>', email, '|', 'phone-number =>', phoneNumber);
  };
}
