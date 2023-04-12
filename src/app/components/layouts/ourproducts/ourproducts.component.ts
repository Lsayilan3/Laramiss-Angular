import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourproducts',
  templateUrl: './ourproducts.component.html',
  styleUrls: ['./ourproducts.component.css']
})
export class OurproductsComponent implements OnInit {

  constructor() { }
  
  // Featurepost
  featureposts = [
    { img: '../../../../assets/img/aaimg/Besin1_245x331_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Yaş Pastalar', price1: '', price2: '' },
    { img: './../../../assets/img/aaimg/Besin2_245x331_245x331.jpg', tag1: 'New', title: 'Kuru Pastalar', price1: '' },
    { img: '../../../../assets/img/aaimg/mey1_245x331.jpg', tag1: 'Sale', tag2: '-10%', title: 'Meyve Çeşitleri', price1: '', price2: '' },
    { img: '../../../../assets/img/aaimg/icec_245x331.jpg', tag1: 'Sale', tag2: '-25%', title: 'İçecek Çeşitleri', price1: '', price2: '' },
  ];

  ngOnInit(): void {
  }

}
