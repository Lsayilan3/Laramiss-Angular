import { SliderTwo } from './../models/sliderTwo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderTwoService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getSliderTwoesList(): Observable<SliderTwo[]> {
  
    let newPath = (environment.getApiUrl + "/sliderTwoes/getall")
    return this.httpClient.get<SliderTwo[]>(newPath)
  }
}
