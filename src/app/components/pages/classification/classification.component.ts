import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {

  constructor() { }
  // Tabs
  earingposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag1: 'New', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Golden Pendant', price1: '$780', price2: '$800' },
  ];

  ringsposts = [
    { img: 'assets/img/shop/03.jpg', tag2: '-10%', title: 'Diamond Ring.', price1: '$890', price2: '$900' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Stud Earrings ', price1: '$580', price2: '$630' },
    { img: 'assets/img/shop/02.jpg', tag1: 'Sale', tag2: '-40%', title: 'Ankle Bracelet', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag2: '-10%', title: 'Diamond Ring.', price1: '$890', price2: '$920' },
  ];

  necklessposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag1: 'New', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Golden Pendant', price1: '$780', price2: '$800' },
  ];

  braceletposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag1: 'New', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Golden Pendant', price1: '$780', price2: '$800' },
  ];
  armletsposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag1: 'New', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Golden Pendant', price1: '$780', price2: '$800' },
  ];
  ankletsposts = [
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Ankle Bracelet', price1: '$390', price2: '$480' },
    { img: 'assets/img/shop/02.jpg', tag1: 'New', title: 'Stud Earrings', price1: '$290', price2: '$300' },
    { img: 'assets/img/shop/03.jpg', tag1: 'New', tag2: '-10%', title: 'Crumpled Ring', price1: '$450', price2: '$510' },
    { img: 'assets/img/shop/01.jpg', tag1: 'Sale', tag2: '-15%', title: 'Golden Pendant', price1: '$780', price2: '$800' },
  ];
  // Tresnding products
  trendingleftposts = [
    { img: '../../../../assets/img/aaımg/q_120x120.jpg', title: 'Sevgililer Günü', text: 'Organizasyon fiyatları için detaylı bilgiler alıp hazırlıklarınıza başlayabilirsiniz.', animationtime: '.3s' },
    { img: '../../../../assets/img/aaımg/q1_120x120.jpg', title: 'Doğum Günü', text: 'Belki de diğer tüm kutlama ve partilere kıyasla çok daha anlamı yüksek etkinliklerdendir..', animationtime: '.4s' },
    { img: '../../../../assets/img/aaımg/q2_120x120.jpg', title: 'Evlilik Teklifi', text: 'O unutulmaz günü en özel hale getirmek için teklif fırsatlarımızı inceleyin..', animationtime: '.5s' },
    { img: '../../../../assets/img/aaımg/q3jgp_120x120.jpg', title: 'Evlilik Yıl Dönümü', text: 'Eşler arasındaki en özel organizasyonlardan bir tanesi olarak görünmektedir.', animationtime: '.6s' },
    { img: '../../../../assets/img/aaımg/q5_120x120.jpg', title: 'Karnı Burnunda Partisi', text: 'İşte karnı burnunda partisi yani Baby Shower hakkında bilmeniz gerekenler.', animationtime: '.7s' },
  ];
  trendingrightposts = [
    { img: '../../../../assets/img/aaımg/q6_120x120.jpg', title: 'Özel Mezuniyet Partisi', text: ' Eğlenceli ve hoş bir mezuniyet töreni için gerekli olan tüm etkenler.', animationtime: '.3s' },
    { img: '../../../../assets/img/aaımg/q4_120x120.jpg', title: 'Yeni İş Partisi', text: 'Süsleme, kokteyl, balon süsleme, iş ortaklarına, ve potansiyel müşteri kitlesine ilan etme.', animationtime: '.4s' },
    { img: '../../../../assets/img/aaımg/q7_120x120.jpg', title: 'Bride To Be', text: 'Gelin adaylarının sosyal çevresinin bu konuda en özel şekilde hazırlandıkları bilinmektedir.', animationtime: '.5s' },
    { img: '../../../../assets/img/aaımg/q8_120x120.jpg', title: 'Hoşgeldin Partisi', text: 'Temalı kişiye özel tasarlanan parti malzemeleri ile okuldan, kamptan, hastaneden eve dönene.', animationtime: '.6s' },
    { img: '../../../../assets/img/aaımg/q9_120x120.jpg', title: 'Uğurlama Partisi', text: 'İşyeri vedaları da parti mekanlarımızda sıkça rastladığımız parti temaları arasında yerini aldı.', animationtime: '.7s' },
  ];
  ngOnInit(): void {
  }

}
