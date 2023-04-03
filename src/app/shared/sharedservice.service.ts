import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../main-prod/product.interface';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  getArticles(){
    return this.http.get("http://localhost:3000/products");
  }
 

};
