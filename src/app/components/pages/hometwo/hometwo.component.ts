import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import $ from 'jquery';
import 'magnific-popup';

@Component({
  selector: 'app-hometwo',
  templateUrl: './hometwo.component.html',
  styleUrls: ['./hometwo.component.css']
})
export class HometwoComponent implements OnInit {

  baseUrl :string=environment.getApiUrl;

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
  // Banner
  bannersliderConfig = {
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 5000,
    "dots": false,
    "fade": true,
    "arrows": false,
  };
  bannerposts = [
    { img: 'http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/banner/04.jpg', tag: 'Sizi Tanımlayan Tasarımlar', title: "Sizin İçin Mükemmel Tasarımlar ", btn1: 'explore more', btn2: 'Buy Now' },
    { img: 'http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/banner/05.jpg', tag: 'En iyi yaz indirimi burada', title: 'Sizin İçin Yeni Tasarım ', btn1: 'explore more', btn2: 'Buy Now' },
  ];
  // condo posts
  condoposts = [
    { img: '../../../../assets/img/aaımg/düğün_370x370.jpg', icon: 'flaticon-ring', title: 'Yeni Düğün Organizasyonları', text: 'Düğün, Kına, Nişan, Evlenme Teklifi ve Özel Organizasyonlar',no:'+ 0532 453 04 35' },
    { img: '../../../../assets/img/aaımg/parti_370x370.jpg', icon: 'flaticon-bracelet-2', title: 'Açık ve Kapalı Parti', text: 'Doğum Günü, Açılış, Brick Tobe, ve Özel Organizasyonlar',no:'+ 0532 453 04 35' },
    { img: '../../../../assets/img/aaımg/Uvbaskı_370x370.jpg', icon: 'flaticon-necklace', title: 'Ahşap Ve Metal Uv Baskı', text: 'Kapı Girşi, Kapı Üstü, Bahçe Salon,ve Özel Tasarımlar ',no:'+ 0532 453 04 35' },
    { img: '../../../../assets/img/aaımg/hediye_370x370.jpg', icon: 'flaticon-diamond', title: 'Binlerce Hediyelik Ürün', text: 'Hediyelik Eşya  Ve Ürünlerimize Gözatın',no:'+ 0532 453 04 35' },
  ];
  // Category box
  catimg1 = '../../../../assets/img/aaımg/gümüş_480x480.jpg';
  catimg2 = '../../../../assets/img/aaımg/gümüş2_480x480.jpg';
  catimg3 = '../../../../assets/img/aaımg/gümüş3_480x480.jpg';
  catimg4 = '../../../../assets/img/aaımg/gümüş1_480x480.jpg';
  // Video img
  videobg = 'assets/img/bg/05.jpg';
  videoicon = 'assets/img/icon/07.png';
  // Tabs img
  tbimg4 = '../../../../assets/img/aaımg/müş.jpg';
  tbimg1 = '../../../../assets/img/aaımg/müş1_380x280.jpg';
  tbimg2 = '../../../../assets/img/aaımg/müş2.jpg';
  tbimg3 = '../../../../assets/img/aaımg/orta1.jpg';
  // Feature img
  feaimg1 = '../../../../assets/img/aaımg/açıl_370x350.jpg';
  feaimg2 = '../../../../assets/img/aaımg/parts.jpg1_370x350.jpg';
  feaimg3 = '../../../../assets/img/aaımg/iyi2_370x350.jpg';
  // handpickproducts 
  pickproducts = [
    { icon: 'flaticon-earrings', url:'kokteyl', title: 'Kokteyl Organizasyonu', text: 'Kokteyl organizasyonu fiyatları menü tarzına göre değişmektedir istenilen menülere ekleme ve çıkarımlar yapılarak fiyatlar oluşturulur. Kokteyl organizasyonu detaylı bilgi için iletişim numaralarımızdan bizimle irtibata geçebilirsiniz.' },
    { icon: 'flaticon-bracelet', url:'sirketEğlence', title: 'Şirket Eğlence Organizasyonu', text: ' Farklı başlık ve nitelikte gerçekleştirilecek tüm organizasyonlar için lojistik destek, malzeme ve personel temini, süsleme çalışmaları, yiyecek içecek hizmetleri, kokteyl, ekipman ve araç kiralama, gösteri, reklam, tanıtım, eğlence. ' },
    { icon: 'flaticon-earrings',url:'personelTemini', title: 'Personel Temini Organizasyonu', text: 'Açılış organizasyonu, fuar organizasyonu, belediye festivali,  piknik organizasyonu, şenlik organizasyonu, mezuniyet organizasyonu, okul etkinliklerinizde bulunan alanında piknik mangal barbüke yapcak deneyimli elemana sahibiz. ' },
    { icon: 'flaticon-bracelet-2',url:'animasyonEkibi', title: 'Paylaço ve Kostümlü Personel', text: 'Bütün organizasyonların baş aktörüdür organizasyonlarınızda palyaçolar çocuklar için yarışmalar düzenler, çocuklarla beraber oyunlar oynar sosis balondan şekiller yaparak çocuklara hediye eder yüz boyaması yapıp çocuklarınızı eğlendirir.' },
    { icon: 'flaticon-ring',url:'sokakLezzetleri', title: 'Sokak Lezzetleri', text: 'Muhteşem bir etkinlik mi planlıyorsunuz ? Profesyonel ekip ve ekipmanlarımızla hizmetinizdeyiz, Hemen bizimle iletişime geçin' },
    { icon: 'flaticon-bracelet',url:'partiEğlence', title: 'Parti Eğlence Organizasyonları', text: 'Restoran, balo salonları, eğlence mekanları, kurumların etkinlik alanları ve şirketlerin ofis katlarında düzenlenen partiler kapsamında verdiğimiz hizmetlerdir ayrıca kostümlü ekip arkadaşlarımızla sevdiklerinize ulaştırması için süpriz hediye servisleri sağlıyoruz' },
  ];
  // Room slider One
  roomslideroneConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "fade": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "arrows": false,
    "dots": false,
    "centerMode": true,
    "centerPadding": '6%',
    "responsive": [{
      "breakpoint": 1600,
      "settings": {
        "slidesToShow": 2,
      },
    },
    {
      "breakpoint": 992,
      "settings": {
        "slidesToShow": 1,
        "centerPadding": '15%',
      },
    },
    ],
  };
  roomslideroneposts = [
    { img: '../../../../assets/img/aaımg/öz_550x580.jpg' },
    { img: '../../../../assets/img/aaımg/öz5_550x580.jpg' },
    { img: '../../../../assets/img/aaımg/öz1_550x580.jpg' },
    { img: '../../../../assets/img/aaımg/öz3_550x580.jpg' },
    { img: '../../../../assets/img/aaımg/öz4_550x580.jpg' },
  ];
  // Room slider content
  roomslidercontentConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "fade": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "arrows": false,
    "dots": true,
  };
  roomslidercontentposts = [
    { icon: 'flaticon-bracelet-2', title: 'Konsept Ağı', text: 'Yüzlerce salon referansı ile Kapadokyanın En çok tercih edilen Kına Organizasyon Firması' },
    { icon: 'flaticon-bracelet-2', title: 'Ürün Detayı', text: 'Trio Ekibi tüm organizasyonlarda davetlileri karşılamak, bekletmek ve başlangıç olarak hizmet vermektedir. Yerli ve yabancı müzik konsepti bulunmaktadır.' },
    { icon: 'flaticon-bracelet-2', title: 'Organizasyon ', text: 'Eğitimli host ve hostestler, birbirinden leziz menüler ve lezzetli ikramlarla kokteyllere özel catering hizmeti ile kokteyllerinizi eksiksiz bir şölene dönüştürüyoruz.' },
    { icon: 'flaticon-bracelet-2', title: 'Çeşitlilik', text: 'Parti ve eğlenceler için sizlere sunduğumuz süsleme, gösteri, mazleme kiralama hizmetlerinden istediklerinizi tercih edebilirsiniz..' },
    { icon: 'flaticon-bracelet-2', title: 'Özellik', text: 'Organizasyonlar için; Servis elemanı ve personel sağlıyoruz. Malzemele kiralama, düğün yemekleri, teknik ekipmanlar, fotoğraf ve video çekimi.' },
  ];


  ngOnInit(): void {

    // Video popup
    ($('.popup-video') as any).magnificPopup({
      type: 'iframe',
    });
  }

}
