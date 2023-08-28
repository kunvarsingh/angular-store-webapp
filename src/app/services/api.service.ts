import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../utils/constants';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  messages: string[] = [];

  constructor(private httpClient: HttpClient) { }

  fetchProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API_BASE_URL}products`)
  }
 
  fetchCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${API_BASE_URL}products/categories`)
  }

  getProductById(poductId:number): Observable<string[]> {
    return this.httpClient.get<string[]>(`${API_BASE_URL}products/${poductId}`)
  }

  getProductsByCategory(category:string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API_BASE_URL}products/category/${category}`)
  }
  
  deleteProduct(productId:number): Observable<Product> {
    return this.httpClient.delete<Product>(`${API_BASE_URL}products/${productId}`)
  }

  updateProduct(product:Product): Observable<Product> {
    return this.httpClient.patch<Product>(`${API_BASE_URL}products/${product.id}`,product)
  }

  createProduct(product:Product): Observable<Product> {
    return this.httpClient.post<Product>(`${API_BASE_URL}products/${product.id}`,product)
  }

}