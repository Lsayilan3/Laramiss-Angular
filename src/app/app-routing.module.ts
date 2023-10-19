import { OrcikolataComponent } from './components/pages/orcikolata/orcikolata.component';
import { OrPartiEglenceComponent } from './components/pages/OrPartiEglence/OrPartiEglence.component';
import { OrPersonelTeminiComponent } from './components/pages/OrPersonelTemini/OrPersonelTemini.component';
import { OrAnimasyonComponent } from './components/pages/OrAnimasyon/OrAnimasyon.component';
import { OrEkipmanKiralamaComponent } from './components/pages/OrEkipmanKiralama/OrEkipmanKiralama.component';
import { OrSokakLezzetiComponent } from './components/pages/OrSokakLezzeti/OrSokakLezzeti.component';
import { OrPiknikComponent } from './components/pages/OrPiknik/OrPiknik.component';
import { OrTrioEkibiComponent } from './components/pages/OrTrioEkibi/OrTrioEkibi.component';
import { OrKokteylComponent } from './components/pages/OrKokteyl/OrKokteyl.component';
import { OrSirketEglenceComponent } from './components/pages/OrSirketEglence/OrSirketEglence.component';
import { OrCoffeeBreakComponent } from './components/pages/OrCoffeeBreak/OrCoffeeBreak.component';
import { OrCateringComponent } from './components/pages/OrCatering/OrCatering.component';
import { OrganizasyonSunnetComponent } from './components/pages/organizasyonSunnet/organizasyonSunnet.component';
import { OrganizasyonPartiStoreComponent } from './components/pages/organizasyonPartiStore/organizasyonPartiStore.component';
import { OrganizasyonNisanComponent } from './components/pages/organizasyonNisan/organizasyonNisan.component';
import { OrganizasyonKınaComponent } from './components/pages/organizasyonKına/organizasyonKına.component';
import { OrganizasyonBabyComponent } from './components/pages/organizasyonBaby/organizasyonBaby.component';
import { YiyecekicecekComponent } from './components/pages/yiyecekicecek/yiyecekicecek.component';
import { PartistoreComponent } from './components/pages/partistore/partistore.component';
import { LazerkesimComponent } from './components/pages/lazerkesim/lazerkesim.component';
import { HediyelikComponent } from './components/pages/hediyelik/hediyelik.component';
import { OrganizasyonComponent } from './components/pages/organizasyon/organizasyon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { AccountComponent } from './components/pages/account/account.component';
import { BlogListComponent } from './components/pages/blog-list/blog-list.component';
import { BlogdetailComponent } from './components/pages/blogdetail/blogdetail.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { BloggridsidebarComponent } from './components/pages/bloggridsidebar/bloggridsidebar.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ClassificationComponent } from './components/pages/classification/classification.component';
import { ComingsoonComponent } from './components/pages/comingsoon/comingsoon.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { GallerytwoComponent } from './components/pages/gallerytwo/gallerytwo.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomefourComponent } from './components/pages/homefour/homefour.component';
import { HomethreeComponent } from './components/pages/homethree/homethree.component';
import { HometwoComponent } from './components/pages/hometwo/hometwo.component';
import { LegalComponent } from './components/pages/legal/legal.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ShopdetailComponent } from './components/pages/shopdetail/shopdetail.component';
import { ShopleftComponent } from './components/pages/shopleft/shopleft.component';
import { ShoplefttwoComponent } from './components/pages/shoplefttwo/shoplefttwo.component';
import { ShoprightComponent } from './components/pages/shopright/shopright.component';
import { ShoprighttwoComponent } from './components/pages/shoprighttwo/shoprighttwo.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TypographyComponent } from './components/pages/typography/typography.component';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';
import { MüzikComponent } from './components/pages/müzik/müzik.component';
import { OrganizasyonAcılısComponent } from './components/pages/organizasyonAcılıs/organizasyonAcılıs.component';

const routes: Routes = [
  {path:'',component:HomeComponent, data: { breadcrumb: 'Homepage' }},
  {path:'home-two',component:HometwoComponent, data: { breadcrumb: 'Homepage 2' }},
  {path:'home-three',component:HomethreeComponent, data: { breadcrumb: 'Homepage 3' }},
  // {path:'home-four',component:HomefourComponent, data: { breadcrumb: 'Homepage 4' }},
  {path:'about',component:AboutComponent, data: { breadcrumb: 'Hakkımızda' }},
  {path:'account',component:AccountComponent, data: { breadcrumb: 'My Account' }},
  {path:'blog-detail',component:BlogdetailComponent, data: { breadcrumb: 'Blog Detayı' }},
  {path:'blog-grid',component:BloggridComponent, data: { breadcrumb: 'Blog Tablosu' }},
  {path:'blog-grid-sidebar',component:BloggridsidebarComponent, data: { breadcrumb: 'Blog Tablosu' }},
  // {path:'blog-list',component:BlogListComponent, data: { breadcrumb: 'Blog List' }},
  // {path:'cart',component:CartComponent, data: { breadcrumb: 'Cart' }},
  {path:'checkout',component:CheckoutComponent, data: { breadcrumb: 'Checkout' }},
  {path:'classification',component:ClassificationComponent, data: { breadcrumb: 'Sınıflandırma' }},
  {path:'coming-soon',component:ComingsoonComponent, data: { breadcrumb: 'Coming Soon' }},
  {path:'contact',component:ContactComponent, data: { breadcrumb: 'İletişim' }},
  {path:'faq',component:FaqComponent, data: { breadcrumb: "FAQ's" }},
  {path:'gallery',component:GalleryComponent, data: { breadcrumb: 'Galeri' }},
  {path:'gallery-two',component:GallerytwoComponent, data: { breadcrumb: 'Galeri' }},
  {path:'legal',component:LegalComponent, data: { breadcrumb: 'Legal' }},
  {path:'login',component:LoginComponent, data: { breadcrumb: 'Login' }},
  {path:'register',component:RegisterComponent, data: { breadcrumb: 'Register' }},
  // {path:'shop-detail',component:ShopdetailComponent, data: { breadcrumb: 'Shop Detail' }},
  {path:'shop-left',component:ShopleftComponent, data: { breadcrumb: 'Spot Ürünler' }},
  {path:'shop-left/:categoryId',component:ShopleftComponent, data: { breadcrumb: 'Spot Ürünler' }},
  // {path:'shop-left-two',component:ShoplefttwoComponent, data: { breadcrumb: 'Shop' }},
  // {path:'shop-right',component:ShoprightComponent, data: { breadcrumb: 'Shop' }},
  // {path:'shop-right-two',component:ShoprighttwoComponent, data: { breadcrumb: 'Shop' }},
  {path:'team',component:TeamComponent, data: { breadcrumb: 'Takım' }},
  {path:'typography',component:TypographyComponent, data: { breadcrumb: 'Tipografi' }},
  // {path:'wishlist',component:WishlistComponent, data: { breadcrumb: 'Wishlist' }},
  {path:'hediyelik', component:HediyelikComponent, data: { breadcrumb: 'Hediyelik' }},
  {path:'lazerkesim', component:LazerkesimComponent, data: { breadcrumb: 'Lazer Kesim' }},
  {path:'organizasyon', component:OrganizasyonComponent, data: { breadcrumb: 'Organizasyon' }},
  {path:'partistore', component:PartistoreComponent, data: { breadcrumb: 'Parti Store' }},
  {path:'yiyecekiçecek', component:YiyecekicecekComponent, data: { breadcrumb: 'Yiyecek Ve İçecekler' }},
  {path:'müzikeğlence', component:MüzikComponent, data: { breadcrumb: 'Müzik Eğlence' }},

 
  {path:'organizasyonBabyShower', component:OrganizasyonBabyComponent, data: { breadcrumb: 'Baby Shower ' }},
  {path:'organizasyonAcılıs', component:OrganizasyonAcılısComponent, data: { breadcrumb: 'Açılış Organizasyonu' }},
  {path:'organizasyonKına', component:OrganizasyonKınaComponent, data: { breadcrumb: 'Kına Organizasyonu' }},
  {path:'organizasyonNisan', component:OrganizasyonNisanComponent, data: { breadcrumb: 'Nişan Organizasyonu' }},
  {path:'organizasyonDüğün', component:OrganizasyonPartiStoreComponent, data: { breadcrumb: 'Düğün Organizasyon' }},
  {path:'organizasyonSunnet', component:OrganizasyonSunnetComponent, data: { breadcrumb: 'Sünnet Organizasyonu' }},

  {path:'catering', component:OrCateringComponent, data: { breadcrumb: 'Catering ' }},
  {path:'coffeBreak', component:OrCoffeeBreakComponent, data: { breadcrumb: 'Coffe Break ' }},
  {path:'sirketEğlence', component:OrSirketEglenceComponent, data: { breadcrumb: 'Şirket Eğlence ' }},
  {path:'kokteyl', component:OrKokteylComponent, data: { breadcrumb: 'Kokteyl Organizasyonu' }},
  {path:'trioEkibi', component:OrTrioEkibiComponent, data: { breadcrumb: 'Trio Ekibi ' }},
  {path:'piknikEkibi', component:OrPiknikComponent, data: { breadcrumb: 'Piknik Organizasyonu ' }},
  {path:'sokakLezzetleri', component:OrSokakLezzetiComponent, data: { breadcrumb: ' Sokak Lezzetleri' }},
  {path:'ekipmanKiralama', component:OrEkipmanKiralamaComponent, data: { breadcrumb: 'Ekipman Kiralama' }},
  {path:'animasyonEkibi', component:OrAnimasyonComponent, data: { breadcrumb: 'Animasyon Ekibi' }},
  {path:'personelTemini', component:OrPersonelTeminiComponent, data: { breadcrumb: 'Personel Temini' }},
  {path:'partiEğlence', component:OrPartiEglenceComponent, data: { breadcrumb: 'Parti Eğlence' }},
  {path:'çikolata', component:OrcikolataComponent, data: { breadcrumb: 'Çikolata' }},
  
  {path:'**',component:ErrorComponent, data: { breadcrumb: '404' }},
  {path:'error',component:ErrorComponent, data: { breadcrumb: '404' }},


  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
