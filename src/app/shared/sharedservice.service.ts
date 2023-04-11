import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../main-prod/product.interface';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private url ="http://localhost:3000/products/"
  constructor(private http: HttpClient) {}

  getArticles(){
    return this.http.get(this.url);
  }
 
  createProduct(product: Product){
    return this.http.post(this.url, product).subscribe();
  }

  deleteProduct(id: number) {
    return this.http.delete(this.url+id)
  }
};
