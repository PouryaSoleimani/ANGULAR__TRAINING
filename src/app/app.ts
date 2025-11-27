import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Header/Header';
import { Footer } from './Footer/footer';
import { Box } from './Box/box';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form-component/form-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Box, FormsModule, FormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ANGULAR__TRAINING');
  protected readonly name = 'POURYA SOLEIMANI';
  imgUrl = 'https://w0.peakpx.com/wallpaper/571/466/HD-wallpaper-angular-programming-computer.jpg';

  public isDisabled = false;

  public inputStringValue = '';
  public inputNumberValue = 0;

  handleSubmit(title: string, price: number) {
    console.log({
      title: title,
      price: price,
    });
  }
}
