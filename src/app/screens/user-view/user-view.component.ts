import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
// modules
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MaterialModule } from '../../material.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { PipesModule } from '../../pipes/pipes.module';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
// models
import { Product } from 'src/app/models/product';
// services
import { ApiService } from '../../services/api.service';
import { ProductDetailViewComponent } from 'src/app/screens/product-detail-view/product-detail-view.component';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
  standalone:true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatGridListModule,
    MaterialModule,
    MatIconModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    PipesModule,
    MatDialogModule, MatButtonModule
  ],
})
export class UserViewComponent implements OnInit  {
  categories : string[]=[];
  options: string[] = [];
  math = Math;
  name:string='';
  isExpand:boolean = false;

  myControl = new FormControl('');
  filteredOptions!: Observable<string[]>;
  products : Product[]=[];

  constructor(private apiService:ApiService,public dialog: MatDialog){}

  ngOnInit(){
    // fetching categories at once while initialization of the page : Kunvar Singh (27-Aug-2023)
    this.apiService.fetchCategories().subscribe((data: string[]) => {
      this.categories = data;
      this.options = this.categories;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
      const defaultSelectedCategory = this.options[0] // by default selecting the first category from dropdown
      this.getProductsByCategory(defaultSelectedCategory);
      this.myControl.setValue(defaultSelectedCategory)
    });
  }

  // on change event on category select 
  onSelectionChange(event:any){
    this.getProductsByCategory(event.option.value)
  }

  // calling the http api based on the user selection from category drodown : Kunvar Singh (27-Aug-2023)
  getProductsByCategory(categoryName:string){
  this.apiService.getProductsByCategory(categoryName).subscribe((data: Product[]) => {
    this.products = data;
  });
}

// _filter method is used for searching the results from prduct based on title of the product : Kunvar Singh (27-Aug-2023)
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  // user click on card for expand view
  expandView(product:Product){
    const dialogRef = this.dialog.open(ProductDetailViewComponent,{width: "500px", data:product});
  }
}

