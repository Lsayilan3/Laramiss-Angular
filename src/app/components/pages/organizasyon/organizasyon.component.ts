import { environment } from './../../../../environments/environment';
import { Organizasyon } from './models/organizasyon';
import { OrganizasyonService } from './services/organizasyon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizasyon',
  templateUrl: './organizasyon.component.html',
  styleUrls: ['./organizasyon.component.scss']
})
export class OrganizasyonComponent implements OnInit {

  organizasyons : Organizasyon [] =[];

  baseUrl :string=environment.getApiUrlPhoto;

  constructor(private organizasyonservice : OrganizasyonService) { }

  ngOnInit(): void {
    this.getOrganizasyon()
  }


  getOrganizasyon() {
		this.organizasyonservice.getOrganizasyonList().subscribe(data => {
			this.organizasyons = data;
		
		});
  }

  
  shopgridpost = [


    {img:'../../../../assets/img/aaimg/orr_345x431.jpg',title:'Coffee Break Hizmeti',tag:'',price:'450',discountprice:'510', detay:'Menü içeriği genel olarak çay, kahve ve unlu mamülerden oluşan bir Catering dalıdır. Tüm aktivitelerde pratikliği ve kısa süreli atıştırmaya müsait olması nedeniyle iş dünyasında çok tercih edilmektedir. genel olarak fuar organizasyonları başta olmak üzere, seminer, toplantı, konferans etkinliklerinde misafir perverliğin bir göstergesi olarak kullanılmaktadır.'},
  ];

  shopgridposta = [
    {img:'../../../../assets/img/aaimg/or3_345x431.jpg',title:'Parti Eğlence Organizasyonları',tag:'',price:'780',discountprice:'800', detay:'Parti ve eğlenceler için sizlere sunduğumuz süsleme, gösteri, mazleme kiralama hizmetlerinden istediklerinizi tercih edebilirsiniz. Yılbaşı partileri, Doğum günü partileri, Yaza merhaba partileri, After partiler, Veda partisi vb. parti etkinlikleri için ekipman temini, konseptli süslemeler, gösteri ve eğlence hizmetleri'},

  ]
  shopgridpostb = [
    {img:'../../../../assets/img/aaimg/or4_345x431.jpg',title:'Düğün Organizasyonları',tag:'',price:'290',discountprice:'300', detay: 'Sizleri bu mutlu gününüzde yalnız bırakmayalım sizin yükünüzü hafifletmek için elimizden geleni yapalım dilek ve isteklerinizi bizimle paylaşarak bu mutlu gününüzü akılda kalıcı ve unutulmayacak bir tören haline getirelim. İster kır düğünü ister kapalı bir mekanda düğün, isterseniz İslami düğün olsun hizmetinizdeyiz'},
    
  ]
  shopgridpostc = [
    {img:'../../../../assets/img/aaimg/orr4_345x431.jpg',title:'Nişan Organizasyonları',tag:'',price:'890',discountprice:'900',detay:'Yapacağınız mekan fark etmeksizin nişan tepsisi, nişan masası, pasta ve daha birçok detayı tek tek gözden geçirmeli ve nişan günü hiçbir şeyi atlamamanız gerekmektedir. Bunun için yanınızda nişan organizasyonu yapmış profesyonel birilerinin olması sizin işlerinizi daha kolaylaştıracak  bir organizasyon olmasını sağlayacaktır.'},
  ]
   
   shopgridpostd = [
    {img:'../../../../assets/img/aaimg/or6_345x431.jpg',title:'Kına Organizasyonları',tag:'',price:'580',discountprice:'630', detay:'Düğüne sayılı günler kala gerçekleştirilen kına gecesinin kusursuz olmasını isteyen çiftler kimi zaman aile arasında bir geceyi tercih ederken kimi zaman akrabaların ve arkadaşların da davet edileceği büyük çaplı bir organizasyon planlar. Eğer siz de kına gecesi organizasyonunuz için doğru şirketi arıyorsanız tüm ihtiyaçlarınıza cevap verecek planlamamız ve ürün çeşitliliğimiz ile hizmetinizdeyiz.'},
    
   ]
   shopgridpostaa = [
    {img:'../../../../assets/img/aaimg/orr3_345x431.jpg',title:'Sünnet Organizasyonları',tag:'',price:'290',discountprice:'300', detay: 'Erkek çocuklara uygulanan bir gelenektir. Aileler erkek çocukları belirli bir olgunluğa geldiğinde çocuklarını dinimizin emirleri kapsamında sünnet ettirmektedir. Bunun için de aynı doğum günü gibi bir çeşit organizasyonlar düzenlenmektedir. Bizimle hemen iletişime geçin bu güzel gününüzü  çocuklarınızın eşsiz mutlu anını beraber paylaşalım sevdikleriniz için beraber planlayalım'},
    
   ]
   shopgridpostab = [
    {img:'../../../../assets/img/aaimg/or7_345x431.jpg',title:'Baby Shower Organizasyonu',tag:'',price:'800',discountprice:'920', detay:'Son zamanların en gözde etkinliklerinden olan bir etkinliktir. Bebeğinizin doğumuna kısa bir süre kala en yakın arkadaşlarınız ve yakınlarınızla birlikte bu güzel gününüzün tadını çıkarırken  süslemeden teknik hizmetlere, catering hizmetinden animasyon hizmetine kadar tüm etkinlikleri sizin için üstleniyor. Tecrübesiyle birçok etkinliği profesyonel olarak ve % 100 memnuniyet garantisiyle sizlere sunuyoruz.'},
    
 ]
   shopgridpostac = [
    {img:'../../../../assets/img/aaimg/or8_345x431.jpg',title:'Personel Temini',tag:'',price:'800',discountprice:'920', detay:'Kapadokya Organizasyon ve Davet olarak bir çok konuda ekipman kiraladığımız gibi ekipmanları kullanan deneyimli ve profesyonel personel kiralama hizmeti veriyoruz. Yada sizin temin ettiğiniz ekipmanları kullanmak ve başında sorumluluk almak üzere görevlendirebilirsiniz. Personel hizmetimiz organizasyonun büyüklüğüne, davetli sayısına göre değişiklik gösterebilmektedir.'},
    
   ]
  shopgridpostad = [
    {img:'../../../../assets/img/aaimg/orr2_345x431.jpg',title:'Ekipman Kiralama',price:'390',discountprice:'480', detay: 'Kapadokya Organizasyon ve Davet hizmetleri olarak, organizasyonlar için ekipman ve porsonel temini yapmaktayız. Ayrıca organizasyonlar için catering hizmetleri sağlanmaktadır. Dj Ses Sistemleri Bando Takımları Mehter Takımı Reklam Arabası Anons Aracı Havai Fişek Işık Şelalesi Yer Volkanları Konfeti Atımı Gündüz Havai Fişek Gösterileri Karma Sahne Efektleri Sis ve Renkli Duman Efektleri sunmaktadır'},
    
   ]
   shopgridpostba = [
     {img:'../../../../assets/img/aaimg/or10_345x431.jpg',title:'Animasyon Ekibi',tag:'',price:'290',discountprice:'300', detay:'Organizasyonlarınızda gösteri animasyon hizmeti verecek gösteri sanatçıları, konuklarınızı karşılayacak yer gösterimi yapabilecek hostesler ve ikramlarınızı dağıtabilecek servis personeli hizmeti vermekteyiz. Eğer sizde böyle bir hizmet almak istiyorsanız Kapadokya Organizasyon ve Davet Hizmetleri bir telefon kadar yakın. Bizi arayarak hemen iletişime geçebilirsiniz ve daha detaylı bilgi alabilrisiniz'},
    
   ]
   shopgridpostbb = [
    {img:'../../../../assets/img/aaimg/or11_345x431.jpg',title:'Trio Ekibi',tag:'',price:'450',discountprice:'510',detay:'Müzik hizmeti sunmak ve aynı zamanda görsel bir aktivite izlemek isteyebilirsiniz. Kapadokya Organizasyon Davet olarak, etkinliklerinize renk katmak için, profesyonel ve deneyimli müzisyenlerimiz ile hizmet veriyoruz.Davetlileriniz içeceklerini yudumlarken, fondan çalan klasik ve jazz müziklerle, kaliteli ve ihtişamlı bir organizasyona imzanızı atabilirsiniz.'},
    
   ]
   shopgridpostbc = [
    {img:'../../../../assets/img/aaimg/or12_345x431.jpg',title:'Piknik Organizasyonu',tag:'',price:'450',discountprice:'510', detay: 'Piknik organizasyonları ile keyifli bir aile günü yaşatabilirsiniz. Şişme oyun parkurları, ödüllü yarışmalar, masörler, kuaför ekibi, falcı köşesi, animatörler, pamuk şeker, pamuk helva, kağıt helva, macuncu, popcorn ve İzmir lokma dağıtımı gibi aktivitelerle siz keyifli bir gün geçirirken, çocuklarınız da profesyonel animatörlerimizle eğlenceli vakit geçirecekler.'},
    
  ]
   shopgridpostbd = [
    {img:'../../../../assets/img/aaimg/or13_345x431.jpg',title:'Sokak Lezzetleri Araçları',tag:'',price:'450',discountprice:'510', detay:'Eski geleneklerimizi canlandırmak amacıyla verdiğimiz animasyonlu yiyecek hizmetidir. Sokak satıcıları olarak da bilinir. Elma şekercisi, falcı, horoz şekerci, kağıt helvacı, kahveci güzeli, lokumcu, macuncu, mısırcı, niyetçi, pamuk şeker, patlamış mısır, simitçi, şerbetçi gibi birçok sokak satıcısı ile Kapadokya Organizasyon ve Davet aracılığı ile tanışabilirsiniz.'},
    
 ]
   shopgridpostca = [
    {img:'../../../../assets/img/aaimg/or1_345x431.jpg',title:'Açılış Organizasyonu',tag:'',price:'290',discountprice:'300',detay:'Açılışlarınıza özel olarak düzenleyeceğimiz organizasyonlar sayesinde, marka isminizi kısa süre içerisinde fazla sayıda kitleye duyurabilirsiniz. Açılış organizasyonu esnasında, markanıza değer katacak hazırlıklarımız sayesinde, daha fazla müşteriye hitap edebilirsiniz. Farklı sektörlere uygun olan organizasyon tipini istiyorsanız, iletişime geçebilirsiniz.'},
    
  ]
  shopgridpostcb = [
    {img:'../../../../assets/img/aaimg/or_345x431.jpg',title:'Kokteyl Organizasyonu',tag:'',price:'390',discountprice:'480',detay:'Etkinlikler ile ilgili fiyat bilgisi almak için telefonla ya da mail adresimize e-mail göndererek iletişime geçip detaylı bilgi alabilirsiniz. Kokteyl organizasyonu fiyatları menü tarzına göre değişmektedir istenilen menülere ekleme ve çıkarımlar yapılarak fiyatlar oluşturulur. Kokteyl organizasyonu detaylı bilgi için iletişim numaralarımızdan bizimle irtibata geçebilirsiniz.'},
    
   ]
  shopgridpostcc = [
    {img:'../../../../assets/img/aaimg/ee_345x431.jpg',title:'Şirket Eğlence Organizasyonları',tag:'',price:'450',discountprice:'510',detay:'Kapadokya Organizasyon ve Davet Hizmetleri olarak Büyüklü küçüklü ister formal ister eğlenceli, farklı başlık ve nitelikte gerçekleştirilecek tüm organizasyonlar için lojistik destek, malzeme ve personel temini, süsleme çalışmaları, yiyecek içecek hizmetleri, kokteyl, ekipman ve araç kiralama, gösteri, reklam, tanıtım, eğlence ve aktivite hizmetleri vermektedir.'},
    
  ]
  shopgridpostcd = [
    {img:'../../../../assets/img/aaimg/orr1.jpg_345x431.jpg',title:'Catering Hizmet',tag:'',price:'450',discountprice:'510',detay:'Günümüzde catering hizmeti, daimi veya geçici yemek ihtiyacı olan yerler için oldukça pratik ve ekonomik bir seçenektir. Kalabalık bir organizasyona kendi başınıza yemek yapıp gelen kişileri ağırlamak oldukça zordur. Böylesi bir hizmet ile artık zoru kolay haline getirilebilmektedir. Ayrıca fiyat bakımından da oldukça uygun sayılabilecek bir seviyededir. '},
    
  ]
 





}
