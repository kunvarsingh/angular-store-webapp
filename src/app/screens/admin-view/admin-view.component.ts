
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import Swal from 'sweetalert2';
// models
import { Product } from 'src/app/models/product';
// services
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css'],
})
export class AdminViewComponent implements AfterViewInit, OnInit  {
  displayedColumns: string[] = ['id', 'title', 'image','description','category', 'price','rating']; // column name of the table header

  dataSource = new MatTableDataSource<Product>();
  products : Product[]=[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apiService:ApiService){}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(){
    this.fetchProductList()
  }

  fetchProductList(){
    // calling an http api for fetching the product list from service : Kunvar Singh (27-Aug-2023)
    this.apiService.fetchProductList().subscribe((data: Product[]) => {
      this.products = data;
      this.dataSource.data = this.products;
    });
  }

  createProduct(){
    Swal.fire('Success!', 'Create action is pending, but API is impelemented', 'success');
    const product:Product = {
      category:'jwellary',
      id:2,
      title:'new product',
      image:'image url',
      price:300,
      rating:{rate:2,count:0},
      description:'complete description of the product'
    }
    this.apiService.createProduct(product).subscribe((data: Product) => {
      this.fetchProductList();
    });
  }

  editProduct(product:Product){
    Swal.fire('Success!', 'Edit action is pending, but API is impelemented', 'success');
    this.apiService.updateProduct(product).subscribe((data: Product) => {
      this.fetchProductList();
    });
  }

  deleteProduct(product:Product){
    Swal.fire('Success!', 'Delete action is pending, but API is impelemented', 'error');
    // calling an http api for deleting the product list from service : Kunvar Singh (27-Aug-2023)
    this.apiService.deleteProduct(product.id).subscribe((data: Product) => {
      this.fetchProductList();
    });
  }
}

