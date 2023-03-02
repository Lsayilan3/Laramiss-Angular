import { SliderTwo } from './../models/sliderTwo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderTwoService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getSliderTwoesList(): Observable<SliderTwo[]> {
  
    let newPath = this.apiUrl + "sliderTwoes/getall"
    return this.httpClient.get<SliderTwo[]>(newPath)
  }
}
