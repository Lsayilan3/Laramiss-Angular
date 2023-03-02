import { SliderTwo } from './models/sliderTwo';
import { SliderTwoService } from './services/sliderTwo.service';
import { environment } from './../../../../environments/environment';
import { Ensatan } from './models/ensatan';
import { EnsatanService } from './services/ensatan.service';

import { Component, AfterViewInit  } from '@angular/core';
import { NgwWowService } from 'ngx-wow'; 
import $ from 'jquery';
import 'magnific-popup';

@Component({ 
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ensatans : Ensatan []=[]

  sliderTwoes : SliderTwo []=[]

  baseUrl :string=environment.getApiUrl;

  constructor(private wowService: NgwWowService, private enSatanService: EnsatanService, private sliderTwoService : SliderTwoService) {
    this.wowService.init();
    this.getEnsatan();
    this.getSliderTwoes();
  }

  
  getEnsatan() {
		this.enSatanService.getEnsatanList().subscribe(data => {
			this.ensatans = data;
		});
  }

  getSliderTwoes() {
		this.sliderTwoService.getSliderTwoesList().subscribe(data => {
			this.sliderTwoes = data;
		});
  }

  // banner
  herosliderConfig =  {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "fade": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "arrows": false,
    "dots": false,
  };
  bannerposts = [
    { img: 'http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/banner/01.jpg' },
    { img: 'http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/banner/02.jpg' },
  ];
  // Categories
  categoryposts = [
    { icon: 'flaticon-bracelet', title: 'Organizasyon', numberofproduct: '+150' },
    { icon: 'flaticon-bracelet', title: 'Gelinlik Kınalık', numberofproduct: '+568' },
    { icon: 'flaticon-bracelet', title: 'Süsleme', numberofproduct: '2371' },
    { icon: 'flaticon-bracelet', title: 'Ses Sistemleri', numberofproduct: '+177' },
  ];

  // Trending collection
  trendingposts = [
    { img: '../../../../assets/img/aaımg/Home.jpg', title: 'Organizasyon', text: 'Düğün Kına Açılış Sünnet', price: '$345/10gm',url:'organizasyon' },
    { img: '../../../../assets/img/aaımg/ptttr_370x260.jpg', title: 'Parti Store', text: 'Yaş Günü Ve Özel Günler', price: '$345/10gm', url:'partistore' },
    { img: '../../../../assets/img/aaımg/110000014453347_370x260.jpg', title: 'Lazer Kesim ve UV Baskı', text: 'Çeşitlendirilebilir Modeller', price: '$345/10gm',url:'lazerkesim' },
    { img: '../../../../assets/img/aaımg/hediyelik1234_370x260.jpg', title: 'Hediyelik Ürünler', text: 'Çikolata Oyuncak Dekarasyon', price: '$345/10gm' ,url:'hediyelik'},
  ];
  // condos post
  condosposts = [
    { img: '../../../../assets/img/aaımg/düğün_370x370.jpg', title: 'Yeni Düğün Organizasyonları', text: 'Düğün, Kına, Nişan, Evlenme Teklifi ve Özel Organizasyonlar', price: '',url:'organizasyonDüğün' },
    { img: '../../../../assets/img/aaımg/parti_370x370.jpg', title: 'Açık ve Kapalı Parti', text: 'Doğum Günü, Açılış, Brick Tobe, ve Özel Organizasyonlar', price: '' ,url:'classification'},
    { img: '../../../../assets/img/aaımg/Uvbaskı_370x370.jpg', title: 'Ahşap Ve Metal Uv Baskıt', text: 'Kapı Girşi, Kapı Üstü, Bahçe Salon,ve Özel Tasarımlar', price: '' ,url:'lazerkesim'},
    { img: '../../../../assets/img/aaımg/hediye_370x370.jpg', title: 'Binlerce Hediyelik Ürün', text: 'Eşsiz Hediyelik Eşya Ve Ürünlerimize Gözatın', price: '',url:'hediyelik' },
  ];
  // Cta 
  ctabg = 'http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/others/product.png';
  // wideslider
  widesliderConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "fade": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "arrows": false,
    "dots": false,
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

  roomslidertwoposts = [
    { img: 'assets/img/room-slider/06.jpg', title: 'Get All Gold Jewels', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', price: '345', weight: '10gm' },
    { img: 'assets/img/room-slider/08.jpg', title: 'Grab Silver Jewel', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', price: '235', weight: '10gm' },
    { img: 'assets/img/room-slider/07.jpg', title: 'Buy All Diamond', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', price: '1,345', weight: '10gm' },
  ];


  roomslidertwoConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "fade": false,
    "infinite": true,
    "autoplay": false,
    "autoplaySpeed": 4000,
    "arrows": true,
    "dots": false,
    "centerMode": true,
    "centerPadding": '28%',
    "prevArrow": '<div class="slick-arrow prev-arrow"><i class="fal fa-arrow-left"></i></div>',
    "nextArrow": '<div class="slick-arrow next-arrow"><i class="fal fa-arrow-right"></i></div>',
    "responsive": [{
      "breakpoint": 1600,
      "settings": {
        "centerPadding": '20%',
      },
    },
    {
      "breakpoint": 992,
      "settings": {
        "centerPadding": '15%',
      },
    },
    {
      "breakpoint": 768,
      "settings": {
        "centerPadding": '10%',
      },
    },
    {
      "breakpoint": 576,
      "settings": {
        "centerPadding": '5%',
      },
    },
    ],
  };
  // shopposts = [
  //   { img: '../../../../assets/img/aaımg/nişanşekerliği_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Nişan Şekerliği', price1: '$390', price2: '$480' },
  //   { img: '../../../../assets/img/aaımg/nişanşekerliği2_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Çikolata Tepsisi', price1: '$390', price2: '$480' },
  //   { img: '../../../../assets/img/aaımg/nişantepsi_245x331.jpg', tag1: 'Sale', tag2: '-10%', title: 'Nişan Tepsi Takımı', price1: '$450', price2: '$510' },
  //   { img: '../../../../assets/img/aaımg/nişşanisimlik_245x331.jpg', tag1: 'New', title: 'Nadir Dekoratifler', price1: '$290' },
  //   { img: '../../../../assets/img/aaımg/parfüm_245x331.jpg', tag1: 'Sale', tag2: '-25%', title: 'Parti Parfümleri', price1: '$500', price2: '$580' },
  //   { img: '../../../../assets/img/aaımg/damatfincanı_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Damat Kahve Fincanı', price1: '$390', price2: '$480' },
  //   { img: '../../../../assets/img/aaımg/En6_245x331.jpg', tag1: 'New', title: 'Nedime Elbisesi', price1: '$290' },
  //   { img: '../../../../assets/img/aaımg/En7_245x331.jpg', tag1: 'Sale', tag2: '-10%', title: 'Gelin Damat Kokusu', price1: '$450', price2: '$510' },
  //   { img: '../../../../assets/img/aaımg/En8_245x331.jpg', tag1: 'Sale', tag2: '-25%', title: 'Masa İsimlik', price1: '$500', price2: '$580' },
  // ];
  texture = 'assets/img/texture-1.png';
  // Tabs
  // Kına
  earingposts = [
    { img: '../../../../assets/img/aaımg/kınna_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Kına Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/kın1_245x331.jpg', tag1: 'New', title: 'Kına Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/kınna11_245x331.jpg', tag1: 'New', tag2: '-10%', title: 'Kına Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/kınna2_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Kına Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
  ];
  // düğün
  ringsposts = [
    { img: '../../../../assets/img/aaımg/düğğün_245x331.jpg', tag2: '-10%', title: 'Düğün Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/düğğün1_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Düğün Organizasyonu ', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/düğğün2_245x331.jpg', tag1: 'Sale', tag2: '-40%', title: 'Düğün Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/düğğün3_245x331.jpg', tag2: '-10%', title: 'Düğün Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
  ];
  // evlilik teklifi
  necklessposts = [
    { img: '../../../../assets/img/aaımg/evvlilik_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Evlilik Teklifi', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/evvlilik1_245x331.jpg', tag1: 'New', title: 'Evlilik Teklifi', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/Kat2_245x331.jpg', tag1: 'New', tag2: '-10%', title: 'Evlilik Teklifi', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/evvlilik2_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Evlilik Teklifi', price1: 'Paket ve İsteğe Özel', price2: '' },
  ];
  // nişan
  braceletposts = [
    { img: '../../../../assets/img/aaımg/nişşan_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Nişan Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/nişşan1_245x331.jpg', tag1: 'New', title: 'Nişan Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/nişşan2_245x331.jpg', tag1: 'New', tag2: '-10%', title: 'Nişan Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/nişşan3_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Nişan Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
  ];
  // açılış
  armletsposts = [
    { img: '../../../../assets/img/aaımg/organizasyon2_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Açılış Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/aççılış_245x331.jpg', tag1: 'New', title: 'Açılış Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/aççılış1_245x331.jpg', tag1: 'New', tag2: '-10%', title: 'Açılış Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/aççııllış_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Açılış Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
  ];
  // sünnet
  ankletsposts = [
    { img: '../../../../assets/img/aaımg/sünnnet_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Sünnet Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/sünnnet1_245x331.jpg', tag1: 'New', title: 'Sünnet Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/sünnnet2_245x331.jpg', tag1: 'New', tag2: '-10%', title: 'Sünnet Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
    { img: '../../../../assets/img/aaımg/sünnn_245x331.jpg', tag1: 'Sale', tag2: '-15%', title: 'Sünnet Organizasyonu', price1: 'Paket ve İsteğe Özel', price2: '' },
  ];
  // Service post
  serviceposts = [
    { img: '../../../../assets/img/aaımg/nişşanissimlik1_600x360.jpg', icon: 'flaticon-earrings', title: 'Nişan İsimliği', text: 'İhtiyacınız Olan Söz & Nişan Ürünleri nişan isimlik modelleri, nişan isimlik özellikleri ve tüm dekoratifleri.' },
    { img: '../../../../assets/img/aaımg/4a06e6bfc6efb85eabe8e0471aa80619_600x360.jpg', icon: 'flaticon-bracelet', title: 'Nişan Çikolatası', text: 'Kız isteme çikolatası, Kuru çiçekli, Cam kutulu, İsteme çikolatası Kararmaz Gümüş Kapaklı, Söz, Nişan Çikolata Gondolu' },
    { img: '../../../../assets/img/aaımg/masaisimliği_600x360.jpg', icon: 'flaticon-earrings', title: 'Masa İsimliği', text: 'İhtiyacınız Olan Söz & Nişan Ürünleri davet masa isimlik modelleri, nişan isimlik özellikleri ve tüm dekoratifleri.' },
  ];
  // Lastestpost indirimdeki ürünler
  latestposts = [
    { img: '../../../../assets/img/aaımg/canlımüzi_245x331.jpg', title: 'Canlı Müzik ve Konser', price: '' },
    { img: '../../../../assets/img/aaımg/ddj_245x331.jpg', title: 'Dj ve Ses Sistemleri', price: '' },
    { img: '../../../../assets/img/aaımg/kın1_245x331.jpg', title: 'Kına Müzik ve Eğlence', price: '' },
    { img: '../../../../assets/img/aaımg/semazen_245x331.jpg', title: 'İlahi ve Semazen Grubu', price: '' },
  ];
  // Counter
  counterposts = [
    { icon: 'flaticon-bracelet-1', number: '84', prefix: 'k', title: 'Jewelriess in Album' },
    { icon: 'flaticon-like', number: '10', prefix: 'M', title: 'Happy Feedbacks' },
    { icon: 'flaticon-earrings', number: '02', prefix: 'k', title: 'Categories Served' },
    { icon: 'flaticon-user-1', number: '100', prefix: 'M', title: 'Happy Clients' },
  ];
  // Masonary image
  msimg1 = 'assets/img/room-type/03.jpg';
  msimg2 = 'assets/img/room-type/01.jpg';
  msimg3 = 'assets/img/room-type/02.jpg';
  // Video poster
  videoimg = '../../../../assets/img/aaımg/video_570x460.jpg';
 
  // Blog post
  latestpostsliderConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "fade": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "arrows": true,
    "dots": false,
    "prevArrow": '.latest-post-arrow .prev-arrow',
    "nextArrow": '.latest-post-arrow .next-arrow',
    "responsive": [{
      "breakpoint": 992,
      "settings": {
        "slidesToShow": 2,
      },
    },
    {
      "breakpoint": 576,
      "settings": {
        "slidesToShow": 1,
      },
    },
    ],
  };
  blogposts = [
    { img: '../../../../assets/img/aaımg/hab.jpg', title: 'Mutlu ve En Özel Gününüzde Sizlerleyiz.', postdate: '', linktext: 'Read More' },
    { img: '../../../../assets/img/aaımg/hab4_360x470.jpg', title: 'Mutlu ve En Özel Gününüzde Sizlerleyiz', postdate: ' ', linktext: 'Read More' },
    { img: '../../../../assets/img/aaımg/hab1.jpg', title: 'Mutlu ve En Özel Gününüzde Sizlerleyiz.', postdate: ' ', linktext: 'Read More' },
    { img: '../../../../assets/img/aaımg/nhab1_360x470.jpg', title: 'Mutlu ve En Özel Gününüzde Sizlerleyiz.', postdate: '', linktext: 'Read More' },
    
    { img: '../../../../assets/img/aaımg/nhab.jpg', title: 'Mutlu ve En Özel Gününüzde Sizlerleyiz.', postdate: '', linktext: 'Read More' },

  ];
  ngAfterViewInit() {
    // Counter
    ($('.counter')as any).each(function () {
      ($(this)as any).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function () {
          ($(this)as any).text(Math.ceil(this.Counter));
        },
      });
    });
    // Video popup
    ($('.popup-video') as any).magnificPopup({
        type: 'iframe',
    });
    
  }

 

}
