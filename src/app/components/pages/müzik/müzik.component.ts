import { environment } from './../../../../environments/environment';
import { Muzik } from './models/muzik';
import { MuzikService } from './services/muzik.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-müzik',
  templateUrl: './müzik.component.html',
  styleUrls: ['./müzik.component.scss']
})
export class MüzikComponent implements OnInit {

  muziks : Muzik []=[];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private muzikservice : MuzikService) { }
  
  ngOnInit(): void {
    this.getMuzik()
  }

  getMuzik() {
		this.muzikservice.getMuzikList().subscribe(data => {
			this.muziks = data;
		
		});
  }

  // shopgridpost = [
  //   {img:'../../../../assets/img/aaımg/or_345x431.jpg',title:'Kokteyl Organizasyonu',tag:'15% Off',price:'390',discountprice:'480',detay:'Etkinlikler ile ilgili fiyat bilgisi almak için telefonla ya da mail adresimize e-mail göndererek iletişime geçip detaylı bilgi alabilirsiniz. Kokteyl organizasyonu fiyatları menü tarzına göre değişmektedir istenilen menülere ekleme ve çıkarımlar yapılarak fiyatlar oluşturulur. Kokteyl organizasyonu detaylı bilgi için iletişim numaralarımızdan bizimle irtibata geçebilirsiniz.'},
  //   {img:'../../../../assets/img/aaımg/or1_345x431.jpg',title:'Açılış Organizasyonu',tag:'10% Off',price:'290',discountprice:'300',detay:'Açılışlarınıza özel olarak düzenleyeceğimiz organizasyonlar sayesinde, marka isminizi kısa süre içerisinde fazla sayıda kitleye duyurabilirsiniz. Açılış organizasyonu esnasında, markanıza değer katacak hazırlıklarımız sayesinde, daha fazla müşteriye hitap edebilirsiniz. Farklı sektörlere uygun olan organizasyon tipini istiyorsanız, iletişime geçebilirsiniz.'},
  //   {img:'../../../../assets/img/aaımg/ee_345x431.jpg',title:'Şirket Eğlence Organizasyonları',tag:'New',price:'450',discountprice:'510',detay:'Kapadokya Organizasyon ve Davet Hizmetleri olarak Büyüklü küçüklü ister formal ister eğlenceli, farklı başlık ve nitelikte gerçekleştirilecek tüm organizasyonlar için lojistik destek, malzeme ve personel temini, süsleme çalışmaları, yiyecek içecek hizmetleri, kokteyl, ekipman ve araç kiralama, gösteri, reklam, tanıtım, eğlence ve aktivite hizmetleri vermektedir.'},

  //   {img:'../../../../assets/img/aaımg/or3_345x431.jpg',title:'Parti Eğlence Organizasyonları',tag:'20% Off',price:'780',discountprice:'800', detay:'Parti ve eğlenceler için sizlere sunduğumuz süsleme, gösteri, mazleme kiralama hizmetlerinden istediklerinizi tercih edebilirsiniz. Yılbaşı partileri, Doğum günü partileri, Yaza merhaba partileri, After partiler, Veda partisi vb. parti etkinlikleri için ekipman temini, konseptli süslemeler, gösteri ve eğlence hizmetleri'},
  //   {img:'../../../../assets/img/aaımg/or4_345x431.jpg',title:'Düğün Organizasyonları',price:'290',discountprice:'300', detay: 'Sizleri bu mutlu gününüzde yalnız bırakmayalım sizin yükünüzü hafifletmek için elimizden geleni yapalım dilek ve isteklerinizi bizimle paylaşarak bu mutlu gününüzü akılda kalıcı ve unutulmayacak bir tören haline getirelim. İster kır düğünü ister kapalı bir mekanda düğün, isterseniz İslami düğün olsun hizmetinizdeyiz'},
  //   {img:'../../../../assets/img/aaımg/orr4_345x431.jpg',title:'Nişan Organizasyonları',tag:'10% Off',price:'890',discountprice:'900',detay:'Yapacağınız mekan fark etmeksizin nişan tepsisi, nişan masası, pasta ve daha birçok detayı tek tek gözden geçirmeli ve nişan günü hiçbir şeyi atlamamanız gerekmektedir. Bunun için yanınızda nişan organizasyonu yapmış profesyonel birilerinin olması sizin işlerinizi daha kolaylaştıracak  bir organizasyon olmasını sağlayacaktır.'},

  //   {img:'../../../../assets/img/aaımg/or6_345x431.jpg',title:'Kına Organizasyonları',tag:'15% Off',price:'580',discountprice:'630', detay:'Düğüne sayılı günler kala gerçekleştirilen kına gecesinin kusursuz olmasını isteyen çiftler kimi zaman aile arasında bir geceyi tercih ederken kimi zaman akrabaların ve arkadaşların da davet edileceği büyük çaplı bir organizasyon planlar. Eğer siz de kına gecesi organizasyonunuz için doğru şirketi arıyorsanız tüm ihtiyaçlarınıza cevap verecek planlamamız ve ürün çeşitliliğimiz ile hizmetinizdeyiz.'},
  //   {img:'../../../../assets/img/aaımg/orr3_345x431.jpg',title:'Sünnet Organizasyonları',tag:'10% Off',price:'290',discountprice:'300', detay: 'Erkek çocuklara uygulanan bir gelenektir. Aileler erkek çocukları belirli bir olgunluğa geldiğinde çocuklarını dinimizin emirleri kapsamında sünnet ettirmektedir. Bunun için de aynı doğum günü gibi bir çeşit organizasyonlar düzenlenmektedir. Bizimle hemen iletişime geçin bu güzel gününüzü  çocuklarınızın eşsiz mutlu anını beraber paylaşalım sevdikleriniz için beraber planlayalım'},
  //   {img:'../../../../assets/img/aaımg/or7_345x431.jpg',title:'Baby Shower Organizasyonu',tag:'New',price:'800',discountprice:'920', detay:'Son zamanların en gözde etkinliklerinden olan bir etkinliktir. Bebeğinizin doğumuna kısa bir süre kala en yakın arkadaşlarınız ve yakınlarınızla birlikte bu güzel gününüzün tadını çıkarırken  süslemeden teknik hizmetlere, catering hizmetinden animasyon hizmetine kadar tüm etkinlikleri sizin için üstleniyor. Tecrübesiyle birçok etkinliği profesyonel olarak ve % 100 memnuniyet garantisiyle sizlere sunuyoruz.'},
  //   {img:'../../../../assets/img/aaımg/or8_345x431.jpg',title:'Personel Temini',tag:'New',price:'800',discountprice:'920', detay:'Kapadokya Organizasyon ve Davet olarak bir çok konuda ekipman kiraladığımız gibi ekipmanları kullanan deneyimli ve profesyonel personel kiralama hizmeti veriyoruz. Yada sizin temin ettiğiniz ekipmanları kullanmak ve başında sorumluluk almak üzere görevlendirebilirsiniz. Personel hizmetimiz organizasyonun büyüklüğüne, davetli sayısına göre değişiklik gösterebilmektedir.'},

  //   {img:'../../../../assets/img/aaımg/orr2_345x431.jpg',title:'Ekipman Kiralama',price:'390',discountprice:'480', detay: 'Kapadokya Organizasyon ve Davet hizmetleri olarak, organizasyonlar için ekipman ve porsonel temini yapmaktayız. Ayrıca organizasyonlar için catering hizmetleri sağlanmaktadır. Dj Ses Sistemleri Bando Takımları Mehter Takımı Reklam Arabası Anons Aracı Havai Fişek Işık Şelalesi Yer Volkanları Konfeti Atımı Gündüz Havai Fişek Gösterileri Karma Sahne Efektleri Sis ve Renkli Duman Efektleri sunmaktadır'},
  //   {img:'../../../../assets/img/aaımg/or10_345x431.jpg',title:'Palyaço ve Kostümlü Personel',tag:'25% Off',price:'290',discountprice:'300', detay:'Organizasyonlarınızda gösteri animasyon hizmeti verecek gösteri sanatçıları, konuklarınızı karşılayacak yer gösterimi yapabilecek hostesler ve ikramlarınızı dağıtabilecek servis personeli hizmeti vermekteyiz. Eğer sizde böyle bir hizmet almak istiyorsanız Kapadokya Organizasyon ve Davet Hizmetleri bir telefon kadar yakın. Bizi arayarak hemen iletişime geçebilirsiniz ve daha detaylı bilgi alabilrisiniz'},
  //   {img:'../../../../assets/img/aaımg/or11_345x431.jpg',title:'Trio Ekibi',tag:'15% Off',price:'450',discountprice:'510',detay:'Müzik hizmeti sunmak ve aynı zamanda görsel bir aktivite izlemek isteyebilirsiniz. Kapadokya Organizasyon Davet olarak, etkinliklerinize renk katmak için, profesyonel ve deneyimli müzisyenlerimiz ile hizmet veriyoruz.Davetlileriniz içeceklerini yudumlarken, fondan çalan klasik ve jazz müziklerle, kaliteli ve ihtişamlı bir organizasyona imzanızı atabilirsiniz.'},
  //   {img:'../../../../assets/img/aaımg/or12_345x431.jpg',title:'Piknik Organizasyonu',tag:'15% Off',price:'450',discountprice:'510', detay: 'Piknik organizasyonları ile keyifli bir aile günü yaşatabilirsiniz. Şişme oyun parkurları, ödüllü yarışmalar, masörler, kuaför ekibi, falcı köşesi, animatörler, pamuk şeker, pamuk helva, kağıt helva, macuncu, popcorn ve İzmir lokma dağıtımı gibi aktivitelerle siz keyifli bir gün geçirirken, çocuklarınız da profesyonel animatörlerimizle eğlenceli vakit geçirecekler.'},

  //   {img:'../../../../assets/img/aaımg/or13_345x431.jpg',title:'Sokak Lezzetleri Araçları',tag:'15% Off',price:'450',discountprice:'510', detay:'Eski geleneklerimizi canlandırmak amacıyla verdiğimiz animasyonlu yiyecek hizmetidir. Sokak satıcıları olarak da bilinir. Elma şekercisi, falcı, horoz şekerci, kağıt helvacı, kahveci güzeli, lokumcu, macuncu, mısırcı, niyetçi, pamuk şeker, patlamış mısır, simitçi, şerbetçi gibi birçok sokak satıcısı ile Kapadokya Organizasyon ve Davet aracılığı ile tanışabilirsiniz.'},
  //   {img:'../../../../assets/img/aaımg/orr1.jpg_345x431.jpg',title:'Catering Hizmet',tag:'15% Off',price:'450',discountprice:'510',detay:'Günümüzde catering hizmeti, daimi veya geçici yemek ihtiyacı olan yerler için oldukça pratik ve ekonomik bir seçenektir. Kalabalık bir organizasyona kendi başınıza yemek yapıp gelen kişileri ağırlamak oldukça zordur. Böylesi bir hizmet ile artık zoru kolay haline getirilebilmektedir. Ayrıca fiyat bakımından da oldukça uygun sayılabilecek bir seviyededir. '},
  //   {img:'../../../../assets/img/aaımg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'15% Off',price:'450',discountprice:'510', detay:'Menü içeriği genel olarak çay, kahve ve unlu mamülerden oluşan bir Catering dalıdır. Tüm aktivitelerde pratikliği ve kısa süreli atıştırmaya müsait olması nedeniyle iş dünyasında çok tercih edilmektedir. genel olarak fuar organizasyonları başta olmak üzere, seminer, toplantı, konferans etkinliklerinde misafir perverliğin bir göstergesi olarak kullanılmaktadır.'},
  // ];
}
