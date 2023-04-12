import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
  // Gallery posts
  galleryposts = [
    {img:'../../../../assets/img/aaimg/x_570x450.jpg',animationtime:'.3s'},
    {img:'../../../../assets/img/aaimg/x1_570x450.jpg',animationtime:'.4s'},

    {img:'../../../../assets/img/aaimg/panoo_1170x570.jpg',animationtime:'.5s'},

    {img:'../../../../assets/img/aaimg/kokteylorganizasyonu3_570x450.jpg',animationtime:'.6s'},
    {img:'../../../../assets/img/aaimg/x3_570x450.jpg',animationtime:'.7s'},

    {img:'../../../../assets/img/aaimg/panooo.jpg',animationtime:'.8s'},
    
    {img:'../../../../assets/img/aaimg/asas3_570x450.jpg',animationtime:'.9s'},
    {img:'../../../../assets/img/aaimg/x5_570x450.jpg',animationtime:'1.1s'},
  ];
  ngOnInit(): void {
    $(document).ready(function() {
      ($('.popup-image') as any).magnificPopup({type:'image', enabled: true, mainClass: 'mfp-fade'});
    });
  }
}
