import { Slider } from './../models/slider';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

constructor(private httpClient: HttpClient) { }


getSliderList(): Observable<Slider[]> {

  let newPath = this.apiUrl + "sliders/getall"
  return this.httpClient.get<Slider[]>(newPath)
}

}
