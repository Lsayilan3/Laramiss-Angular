import { environment } from './../../../../environments/environment';
import { Blog } from './models/blog';
import { BlogService } from './services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloggrid',
  templateUrl: './bloggrid.component.html',
  styleUrls: ['./bloggrid.component.css']
})
export class BloggridComponent implements OnInit {

  blogs : Blog [] = [];

  baseUrl :string=environment.getApiUrl;

  constructor( private blogservice : BlogService) { }

  // bloggridposts = [
  //   {img:'../../../../assets/img/aaımg/bblog1_370x260.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'../../../../assets/img/aaımg/bblog_370x260.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'assets/img/latest-post/03.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'assets/img/latest-post/04.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'assets/img/latest-post/05.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'assets/img/latest-post/06.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'assets/img/latest-post/01.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'assets/img/latest-post/02.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'assets/img/latest-post/03.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'assets/img/latest-post/04.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'assets/img/latest-post/05.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  //   {img:'assets/img/latest-post/06.jpg',title:'We provide you with top notch Jewelry Products',postdate:'28th Aug 2020',text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',author:'Admin'},
  // ];
  
  ngOnInit(): void {
    this.getBlog()
  }

  getBlog() {
		this.blogservice.getBlogList().subscribe(data => {
			this.blogs = data;
		
		});
  }

}
