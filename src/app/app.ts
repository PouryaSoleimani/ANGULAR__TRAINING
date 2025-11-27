import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Header/Header';
import { Footer } from './Footer/footer';
import { Box } from './Box/box';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Box],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ANGULAR__TRAINING');
  protected readonly name = 'POURYA SOLEIMANI';
  imgUrl = 'https://w0.peakpx.com/wallpaper/571/466/HD-wallpaper-angular-programming-computer.jpg';

  public isDisabled = false;

  clickFunctionEvent(event: any) {
    console.info('CLICK TEST !! ', event.target.value);
  }
}
 