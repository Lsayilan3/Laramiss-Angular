import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-habout',
  templateUrl: './habout.component.html',
  styleUrls: ['./habout.component.css']
})
export class HaboutComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  // About img
  aboutimg1 = 'http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/feature/04.jpg';
  aboutimg2 = 'http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/feature/05.jpg';
  aboutbottomimg = 'http://metropolitanhost.com/themes/themeforest/html/laramiss/assets/img/bg/03.jpg';
  ngOnInit(): void {
  }

}
