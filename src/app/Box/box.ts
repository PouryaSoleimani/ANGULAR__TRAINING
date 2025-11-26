import { Component } from '@angular/core';
import { LittleBox } from '../little-box/little-box';

@Component({
  selector: 'AppBox',
  imports: [LittleBox],
  templateUrl: './box.html',
  styleUrl: './box.css',
})
export class Box {
  public readonly title = 'PRODUCT_1';
  public readonly desc = 'DESC__DESC';
  public readonly price = 200000;
}
