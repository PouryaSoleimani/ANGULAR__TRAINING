import { Component } from '@angular/core';
import { LittleBox } from '../little-box/little-box';
import { Select } from '../select/select';

@Component({
  selector: 'app-box',
  imports: [LittleBox, Select],
  templateUrl: './box.html',
  styleUrl: './box.css',
})

export class Box {
  public readonly title = 'PRODUCT_1';
  public readonly desc = 'DESC__DESC';
  public readonly price = 200000;
}
