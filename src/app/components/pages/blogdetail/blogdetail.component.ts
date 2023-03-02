import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.css']
})
export class BlogdetailComponent implements OnInit {

  constructor() { }
  blogimg = '../../../../assets/img/aaımg/çiç.jpg';
  blogauthor = '../../../../assets/img/aaımg/mis3_255x276.jpg';

  relatedtags = [
    {tag:'Kapadokya'},
    {tag:'Davet'},
    {tag:'Organizasyon'},
  ];

  blogsocials = [
    {icon:'fa-facebook-f',url:''}, 
    {icon:'fab fa-instagram',url:'https://www.instagram.com/@kapadokyaorganizasyonvedavet/'},
    {icon:'fa-twitter',url:''},
    {icon:'fa-google-plus-g',url:'mailto:ajanssahin@hotmail.com'},   
    // {icon:'fa-medium',url:'#'},
    // {icon:'fa-tumblr',url:'#'},
  ];

  blogicon = 'assets/img/blog-details/icon.png';

  relatedposts = [
    {img:'../../../../assets/img/aaımg/det.jpg',title:'Hangi Gelinlikle Hangi Takılar',text:'Düğün asistanımız senin için ücretsiz araştırsın, hayallerini süsleyecek düğün için teklif al.',postdate:'24th March 2020'},
    {img:'../../../../assets/img/aaımg/det1.jpg',title:'Nişan-Yüzükleri için Pırlanta Olmayan Değerli Taşlar',text:'Mor ametist, Sarı sitrin, Turmalin, Ay taşı, Pembe kuvars ve Peridot ',postdate:'24th March 2020'},
  ];

  authorimg = "../../../../assets/img/aaımg/hizmet-1_180x200.jpg";

  commentuser1 = 'assets/img/blog-details/avatar-1.jpg';
  commentuser2 = 'assets/img/blog-details/avatar-2.jpg';
  commentuser3 = 'assets/img/blog-details/avatar-3.jpg';

  ngOnInit(): void {
  }

}
