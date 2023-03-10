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
    { img: '../../../../assets/img/aa??mg/q_120x120.jpg', title: 'Sevgililer G??n??', text: 'Organizasyon fiyatlar?? i??in detayl?? bilgiler al??p haz??rl??klar??n??za ba??layabilirsiniz.', animationtime: '.3s' },
    { img: '../../../../assets/img/aa??mg/q1_120x120.jpg', title: 'Do??um G??n??', text: 'Belki de di??er t??m kutlama ve partilere k??yasla ??ok daha anlam?? y??ksek etkinliklerdendir..', animationtime: '.4s' },
    { img: '../../../../assets/img/aa??mg/q2_120x120.jpg', title: 'Evlilik Teklifi', text: 'O unutulmaz g??n?? en ??zel hale getirmek i??in teklif f??rsatlar??m??z?? inceleyin..', animationtime: '.5s' },
    { img: '../../../../assets/img/aa??mg/q3jgp_120x120.jpg', title: 'Evlilik Y??l D??n??m??', text: 'E??ler aras??ndaki en ??zel organizasyonlardan bir tanesi olarak g??r??nmektedir.', animationtime: '.6s' },
    { img: '../../../../assets/img/aa??mg/q5_120x120.jpg', title: 'Karn?? Burnunda Partisi', text: '????te karn?? burnunda partisi yani Baby Shower hakk??nda bilmeniz gerekenler.', animationtime: '.7s' },
  ];
  trendingrightposts = [
    { img: '../../../../assets/img/aa??mg/q6_120x120.jpg', title: '??zel Mezuniyet Partisi', text: ' E??lenceli ve ho?? bir mezuniyet t??reni i??in gerekli olan t??m etkenler.', animationtime: '.3s' },
    { img: '../../../../assets/img/aa??mg/q4_120x120.jpg', title: 'Yeni ???? Partisi', text: 'S??sleme, kokteyl, balon s??sleme, i?? ortaklar??na, ve potansiyel m????teri kitlesine ilan etme.', animationtime: '.4s' },
    { img: '../../../../assets/img/aa??mg/q7_120x120.jpg', title: 'Bride To Be', text: 'Gelin adaylar??n??n sosyal ??evresinin bu konuda en ??zel ??ekilde haz??rland??klar?? bilinmektedir.', animationtime: '.5s' },
    { img: '../../../../assets/img/aa??mg/q8_120x120.jpg', title: 'Ho??geldin Partisi', text: 'Temal?? ki??iye ??zel tasarlanan parti malzemeleri ile okuldan, kamptan, hastaneden eve d??nene.', animationtime: '.6s' },
    { img: '../../../../assets/img/aa??mg/q9_120x120.jpg', title: 'U??urlama Partisi', text: '????yeri vedalar?? da parti mekanlar??m??zda s??k??a rastlad??????m??z parti temalar?? aras??nda yerini ald??.', animationtime: '.7s' },
  ];
  ngOnInit(): void {
  }

}
