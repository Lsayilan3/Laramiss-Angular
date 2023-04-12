import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogsidebar',
  templateUrl: './blogsidebar.component.html',
  styleUrls: ['./blogsidebar.component.css']
}) 
export class BlogsidebarComponent implements OnInit {

  constructor() { }
  // Author img 
  authorimg = '../../../../assets/img/aaimg/dron_140x140.jpg';
  // Popular feeds
  popularfeeds = [
    {img:'../../../../assets/img/aaimg/renk.jpg',title:'Renkli İz Bırakan Anlar Nasıl Oluşur?',postdate:'24th March 2022'},
    {img:'../../../../assets/img/aaimg/renk1.jpg',title:'Çiçek, Bitki Alerjiniz Varsa Ne Kullanırsınız?',postdate:'24th March 2022'},
    {img:'../../../../assets/img/aaimg/renk2.jpg',title:'Ruh halini tütsü ile ayarlamak?',postdate:'24th March 2022'},
  ];
  // Categories
  categories = [
    {title:'Hediyelik',numberofpost:'+4820'},
    {title:'İkramlık',numberofpost:'+1647'},
    {title:'Dekoratif Giydirme',numberofpost:'+3540'},
    {title:'Dekoratif Süsleme',numberofpost:'+4100'},
    {title:'Kiralık Konseptler',numberofpost:'+1355'},
  ];
  // Twitter Feeds
  twitterfeeds = [
    {tweet:'Rescue - #MustEntertainment #Organizasyon #Prodüksiyon #Menajerlik #DinçerGüner #Söyleşi https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1',tweetdate:'September 12, 2022'},
    {tweet:'Rescue - #sanatsanaiyigelecek #skmdekonser #Skmkonya #1dunyaskm #sanatınkültürünmerkezi #sahne #kültürsanat #konser #concert #organizasyon #etkinlik #konya #türkey https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1',tweetdate:'September 12, 2022'},
    {tweet:'Rescue - #Hazedy #trend #yenisezon #newseason #davet #kokteyl #organizasyon #coctail #moda #fashion #indirim #istanbul #ankara #izmir #antalya https://t.co/2r1POjOjgVC… https://t.co/rDAnPyClu1',tweetdate:'September 12, 2022'},
  ];
  // Instagram Feeds
  instafeeds = [
    {img:'../../../../assets/img/aaimg/in_80x80.jpg'},
    {img:'../../../../assets/img/aaimg/indir1.jpg'},
    {img:'../../../../assets/img/aaimg/in2_80x80.jpg'},
    {img:'../../../../assets/img/aaimg/indir2.jpg'},
    {img:'../../../../assets/img/aaimg/in4_80x80.jpg'},
    {img:'../../../../assets/img/aaimg/in8_80x80.jpg'},
    {img:'../../../../assets/img/aaimg/indir3.jpg'},
    {img:'../../../../assets/img/aaimg/in7_80x80.jpg'},
    {img:'../../../../assets/img/aaimg/indir.jpg'},
   
  ];
  // Popular Tags
  tags = [
    {title:'Çekim'},
    {title:'düğün'},
    {title:'kına'},
    {title:'nişan'},
    {title:'evlenme teklifi'},
    {title:'açılış'},
    {title:'trio ekibi'},
    {title:'catering hizmeti'},
    {title:'coffee break'},
    {title:'kokteyl'},
    {title:'parti store'},
    {title:'müzik'},
  ];
  // Adv
  advbanner= '../../../../assets/img/aaimg/advbanner.jpg';
  ngOnInit(): void {
  }

}
