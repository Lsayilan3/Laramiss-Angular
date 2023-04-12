import { Slider } from './../models/slider';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

constructor(private httpClient: HttpClient) { }


getSliderList(): Observable<Slider[]> {

  let newPath = (environment.getApiUrl +"/sliders/getall")
  return this.httpClient.get<Slider[]>(newPath)
}

}
