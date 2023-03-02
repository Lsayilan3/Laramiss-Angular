

import { Category } from './../shopleftcategory/models/category';
import { CategoryService } from './../shopleftcategory/services/category.service';
import { environment } from './../../../../environments/environment';
import { SpotService } from './services/spot.service';

import { Component, OnInit } from '@angular/core';
import { Spot } from './models/spot';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopleft',
  templateUrl: './shopleft.component.html',
  styleUrls: ['./shopleft.component.css']
})
export class ShopleftComponent implements OnInit {

  spots: Spot []= [];

  category : Category 

  baseUrl :string=environment.getApiUrl;
  constructor(private spotService : SpotService, private categoryService :CategoryService , private activatedRoute: ActivatedRoute) { }
   // Shop grid
   
  // shopgridpost = [
  //   {img:'assets/img/shop/01.jpg',title:'Ankle Bracelet',tag:'Sale',tag1:'-15%',price:'390',discountprice:'480'},
  //   {img:'assets/img/shop/02.jpg',title:'Stud Earrings',tag:'New',price:'290',discountprice:'300'},
  //   {img:'assets/img/shop/03.jpg',title:'Crumpled Ring',tag:'New',tag1:'-10%',price:'450',discountprice:'510'},

  //   {img:'assets/img/shop/01.jpg',title:'Golden Pendant',tag:'Sale',tag1:'-15%',price:'780',discountprice:'800'},
  //   {img:'assets/img/shop/02.jpg',title:'Silver Pendant.',price:'290',discountprice:'300'},
  //   {img:'assets/img/shop/03.jpg',title:'Diamond Ring.',tag1:'-10%',price:'890',discountprice:'900'},

  //   {img:'assets/img/shop/01.jpg',title:'Stud Earrings',tag:'Sale',tag1:'-15%',price:'580',discountprice:'630'},
  //   {img:'assets/img/shop/02.jpg',title:'Ankle Bracelet',tag:'Sale',tag1:'-40%',price:'290',discountprice:'300'},
  //   {img:'assets/img/shop/03.jpg',title:'Diamond Ring.',tag1:'-10%',price:'800',discountprice:'920'},

  //   {img:'assets/img/shop/01.jpg',title:'Ankle Bracelet',tag:'Sale',tag1:'-15%',price:'390',discountprice:'480'},
  //   {img:'assets/img/shop/02.jpg',title:'Stud Earrings',tag:'New',price:'290',discountprice:'300'},
  //   {img:'assets/img/shop/03.jpg',title:'Crumpled Ring',tag:'New',tag1:'-10%',price:'450',discountprice:'510'},
  // ];

 


  ngOnInit() : void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getCategoryById(params["categoryId"])
        this.getSpot(params['categoryId'])
        
      }else{
        this.getSpott();
      }
    })
  }

  getSpot(categoryId : number){
    this.spotService.getSpotList(categoryId).subscribe(data=> this.spots=data)
  }
  
  getCategoryById(categoryId:any){
    this.categoryService.getCategoryById(categoryId).subscribe(data=>{
      this.category = data;
    })
  }

  getSpott() {
    this.spotService.getSpotListt().subscribe(data => {
      this.spots = data;
    
    });
  


}
}
