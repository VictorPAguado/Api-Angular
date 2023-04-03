import { SharedService } from './../shared/sharedservice.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../main-prod/product.interface';

@Component({
  selector: 'app-main-prod',
  templateUrl: './main-prod.component.html',
  styleUrls: ['./main-prod.component.scss']
})
export class MainProdComponent implements OnInit{

  articles:any;
  constructor(private sharedService: SharedService){}

  ngOnInit(): void {
    this.sharedService.getArticles().subscribe((res:any) =>{
      console.log(res);
      this.articles = res;
    });
  }

}
