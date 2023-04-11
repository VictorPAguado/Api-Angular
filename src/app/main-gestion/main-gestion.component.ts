import { Product } from './../main-prod/product.interface';
import { SharedService } from './../shared/sharedservice.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-main-gestion',
  templateUrl: './main-gestion.component.html',
  styleUrls: ['./main-gestion.component.scss']
})
export class MainGestionComponent {
  producto: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    image: '',
    stars: ''
  }
  
  constructor (private SharedService: SharedService){}

  post (){
  this.SharedService.createProduct(this.producto)
  confirm("producto modificado")
  location.reload()
  }
}
