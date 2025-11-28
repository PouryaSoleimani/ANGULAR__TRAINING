import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Header/Header';
import { Footer } from './Footer/footer';
import { Box } from './Box/box';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form-component/form-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Box, FormsModule, FormComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ANGULAR__TRAINING');
  protected readonly name = 'POURYA SOLEIMANI';
  imgUrl = 'https://w0.peakpx.com/wallpaper/571/466/HD-wallpaper-angular-programming-computer.jpg';

  public isDisabled = true;
  public inputStringValue = '';
  public inputNumberValue = 0;

  public handleToggle() {
    this.isDisabled = !this.isDisabled
  }

  public handleSubmit(title: string, price: number) {
    console.log({
      title: title,
      price: price,
    });
  }

  public getColor() {
    if (this.isDisabled == true) {
      return 'cornflowerblue'
    } else {
      return 'darkRed'
    }
  }

  public color = 'black'

  public FakeDataProducts = [
    { id: "1", title: 'PRODUCT_1' },
    { id: "2", title: 'PRODUCT_2' },
    { id: "3", title: 'PRODUCT_3' },
    { id: "4", title: 'PRODUCT_4' },
  ]

  public addProduct() {
    this.FakeDataProducts.push({
      id: crypto.randomUUID(),
      title: 'PRODUCT__' + (Math.random() * 10).toString().slice(0, 1)
    })
  }

  public isShowDetails = false
  public details = 'THIS IS DETAILS'

  public detailsShowToggler() {
    this.isShowDetails = !this.isShowDetails
  }

  public numbersArray: number[] = []

  public addNumberToArray() {
    this.numbersArray.push((this.numbersArray.length + 1))
  }

}


