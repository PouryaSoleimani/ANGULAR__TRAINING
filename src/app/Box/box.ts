import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.html',
  styleUrl: './box.css',
})
export class Box {
  public readonly title = 'PRODUCT_1';
  public readonly desc = 'DESC__DESC';
  public readonly price = 200000;
}
