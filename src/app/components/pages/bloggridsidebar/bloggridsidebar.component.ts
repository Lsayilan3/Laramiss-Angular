import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloggridsidebar',
  templateUrl: './bloggridsidebar.component.html',
  styleUrls: ['./bloggridsidebar.component.css']
})
export class BloggridsidebarComponent implements OnInit {

  constructor() { }

  bloggridposts = [
   
    {img:'../../../../assets/img/aaımg/s4_370x260.jpg',title:'Size birinci sınıf Kapıda Karşılama Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Kapıda Karşılama. sizlere yardımcı olabilecek ve kapıda değerli misafirlerinizi karşılayacak hostes bayan arkadaşlar yükünüzü azaltacaktır.',author:'Admin'},
    {img:'../../../../assets/img/aaımg/s1_370x260.jpg',title:'Size birinci sınıf Organizasyon Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Kusursuzluğun gökyüzündeki yansıması. Organizasyonlarınız için ihtiyaç duyabileceğiniz birçok şeyi firmamızdan temin edebilirsiniz. ',author:'Admin'},
    {img:'../../../../assets/img/aaımg/s2_370x260.jpg',title:'Size birinci sınıf Kişiye Özel Hediyeler sunuyoruz',postdate:'28th Aug 2022',text:'Her biri birbirinden şık kişiye özel hediye çeşitleri arasında; özel gün konseptine uygun hediyelerirmiz le hizmetinizdeyiz ',author:'Admin'},
    {img:'../../../../assets/img/aaımg/s3_370x260.jpg',title:'Size birinci sınıf Mekana Özel Kutlama Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Yemek ve eğlenceyi bir arada sunan, kutlama grupları için en iyi Kapadokya mekanları. Kutlama için fix menü  ve kokteyil.',author:'Admin'},
    {img:'../../../../assets/img/aaımg/altn_370x260.jpg',title:'Size birinci sınıf Gold Özel Servis Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Yılların verdiği tecrübe ürün ve hizmet kalitemizi sizlere sunuyoruz. Renk seçeneği oluşturmak adına altın gümüş vb ürünlerimiz çeşitlendirilmiştir  .',author:'Admin'},
    {img:'../../../../assets/img/aaımg/as6_370x260.jpg',title:'Size birinci sınıf Gümüş Özel Servis Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Yılların verdiği tecrübe ürün ve hizmet kalitemizi sizlere sunuyoruz. Renk seçeneği oluşturmak adına altın gümüş vb ürünlerimiz çeşitlendirilmiştir.',author:'Admin'},
    {img:'../../../../assets/img/aaımg/ss_370x260.jpg',title:'Size birinci sınıf Özel İkram Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Lezzetli çikolata tanımını tekrar yapıyoruz. Büyüleyici lezzetleriyle nice kalpleri fetheden, varlığıyla girdiği her ortamı yumuşatan çikolatalar.',author:'Admin'},
    {img:'../../../../assets/img/aaımg/ss1_370x260.jpg',title:'Size birinci sınıf İkram Karşılama Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Düğün ve nikah törenlerine katılan konuklara hediye olarak çikolata vermek adetten sayılıyor. İsimli Söz Nişan Düğün Çikolataları.',author:'Admin'},
    {img:'../../../../assets/img/aaımg/as_370x260.jpg',title:'Size birinci sınıf İsimli Karşılama Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Fotoğraf baskılı karşılama panoları, isimli karşılama panoları, düğün için giriş panosu gibi ürünleri yüzlerce farklı tasarımla sizlere sunuyoruz..',author:'Admin'},
    
    {img:'../../../../assets/img/aaımg/tepsssi2_370x260.jpg',title:'Size birinci sınıf Gümüş Takım Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Firmamız tarafından 925 Ayar gümüşten tamamen el işçiliği ile özenle hazırlanmıştır. Yılların verdiği ürün ve hizmet kalitemizi sizlere sunuyoruz.',author:'Admin'},
    {img:'../../../../assets/img/aaımg/as2_370x260.jpg',title:'Size birinci sınıf Gümüş Kişiye Özel Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Yılların verdiği tecrübe ürün ve hizmet kalitemizi sizlere sunuyoruz. Tüm ürünlerimiz tadilat garantili olup , kişiye özel ürünlerde',author:'Admin'},
    {img:'../../../../assets/img/aaımg/kahve_370x260.jpg',title:'Size birinci sınıf Gümüş Takım Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Bu setlerin parçaları arasında tepsi, fincan, yüzük ve bileklik gibi ürünler bulunmaktadır. İsimli tasarımları dekarasyonları farklılık göstermektedir',author:'Admin'},
    {img:'../../../../assets/img/aaımg/as4_370x260.jpg',title:'Size birinci sınıf Çeşitlendirilebilir Dekoratif Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Ev dekorasyon aksesuar kategorisinde farklı mekanlar için elverişli malzemeler yer alır. Yaşam Alanınıza Renk Katacak Dekoratifler.',author:'Admin'},
    {img:'../../../../assets/img/aaımg/as5_370x260.jpg',title:'Size birinci sınıf Işıklı Dekoratif Ürünleri sunuyoruz',postdate:'28th Aug 2022',text:'Isikli Dekorasyon & aydınlatma ürünleri, ayna, hediyelik eşya, avize & kanvas tablo, LED ışıklı duvar saatleri ve binlerce eşsiz tasarımlarıyla ',author:'Admin'},
  ];

  ngOnInit(): void {
  }

}
