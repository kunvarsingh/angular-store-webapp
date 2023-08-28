import {Component, Inject} from '@angular/core';
// modules
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {NgFor} from '@angular/common';
// models
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule,MatIconModule,NgFor],

})
export class ProductDetailViewComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductDetailViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product) {}
    math = Math;
}
