import { environment } from './../../../../environments/environment';
import { GalleryTwo } from './models/gallerytwo';
import { GallerytwoService } from './services/gallerytwo.service';
import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow'; 
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-gallerytwo',
  templateUrl: './gallerytwo.component.html',
  styleUrls: ['./gallerytwo.component.css']
})
export class GallerytwoComponent implements OnInit {

  gallerytwoes : GalleryTwo []=[]

  baseUrl :string=environment.getApiUrl;

  constructor(private wowService: NgwWowService , private galleryTwoService: GallerytwoService) {
    this.wowService.init();
    this.getGalleryTwo();
  }


  getGalleryTwo() {
		this.galleryTwoService.getGalleryTwoList().subscribe(data => {
			this.gallerytwoes = data;
		
		});
  }



  // Gallery posts
  // galleryposts = [
  //   {img:'../../../../assets/img/aaımg/gal_570x450.jpg'},
  //   {img:'../../../../assets/img/aaımg/gal1_570x450.jpg'},
  //   {img:'../../../../assets/img/aaımg/gal2_570x450.jpg'},
  //   {img:'../../../../assets/img/aaımg/gal3_570x450.jpg'},
  //   {img:'../../../../assets/img/aaımg/gal4_570x450.jpg'},
  //   {img:'../../../../assets/img/aaımg/gal5_570x450.jpg'},
  //   {img:'../../../../assets/img/aaımg/gal6_570x450.jpg'},
  //   {img:'../../../../assets/img/aaımg/gal7_570x450.jpg'},
  //   {img:'../../../../assets/img/aaımg/gal8_570x450.jpg'},
    
  // ];
  ngOnInit(): void {
    $(document).ready(function() {
      ($('.popup-image') as any).magnificPopup({type:'image', enabled: true, mainClass: 'mfp-fade'});
    });
  }

}
