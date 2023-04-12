import { environment } from './../../../../environments/environment';
import { Ensonurun } from './models/ensonurun';
import { EnsonurunService } from './services/ensonurun.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latestpro',
  templateUrl: './latestpro.component.html',
  styleUrls: ['./latestpro.component.css']
})
export class LatestproComponent implements OnInit {

  ensonuruns : Ensonurun[]=[];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private ensonurunService : EnsonurunService){}


  getEnsonurun() {
		this.ensonurunService.getEnsonurunList().subscribe(data => {
			this.ensonuruns = data;
		
		});
  }
 // Shop latest product
 shoplatestsliderConfig = {
  "slidesToShow": 4,
  "slidesToScroll": 1,
  "fade": false,
  "infinite": true,
  "autoplay": true,
  "autoplaySpeed": 4000,
  "arrows": true,
  "dots": false,
  "prevArrow": '.shop-post-arrow .prev-arrow',
  "nextArrow": '.shop-post-arrow .next-arrow',
  "responsive": [{
    "breakpoint": 992,
    "settings": {
      "slidesToShow": 3,
    },
  },
  {
    "breakpoint": 767,
    "settings": {
      "slidesToShow": 1,
    },
  },
  ],
 };
// shoplatestposts = [
//   { img: '../../../../assets/img/aaımg/bbbb_245x331.jpg', tag1: 'New', title: 'Tül Dekarasoyonu', price1: '' },
//   { img: '../../../../assets/img/aaımg/bbbb1_245x331.jpg', tag1: 'New', title: 'Balon Dekarasoyonu', price1: '' },
//   { img: '../../../../assets/img/aaımg/bbbb3_245x331.jpg', tag1: 'New', title: 'Çiçek Balon', price1: '' },
//   { img: '../../../../assets/img/aaımg/zzzz_245x331.jpg', tag1: 'Sale', tag2: '-25%', title: 'Gümüş Zütcaciyeleri', price1: '', price2: '' },
//   { img: '../../../../assets/img/aaımg/zzzz1_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Dekoratif Çeşitleri', price1: '', price2: '' },
//   { img: '../../../../assets/img/aaımg/zzzz2_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Işıklı Dekoratif', price1: '', price2: '' },
//   { img: '../../../../assets/img/aaımg/kkkk_245x331.jpg', tag1: 'New', title: 'Kına Ambiyansı', price1: '' },
//   { img: '../../../../assets/img/aaımg/kkkk1_245x331.jpg', tag1: 'New', title: 'İsimli Mum', price1: '' },
//   { img: '../../../../assets/img/aaımg/kkkk2_245x331.jpg', tag1: 'New', title: 'Bardak  Mum', price1: '' },
//   { img: '../../../../assets/img/aaımg/kkkk4_245x331.jpg', tag1: 'New', title: 'Kokulu Mum', price1: '' },
// ];
  ngOnInit(): void {
    this.getEnsonurun();
  }
 

}
