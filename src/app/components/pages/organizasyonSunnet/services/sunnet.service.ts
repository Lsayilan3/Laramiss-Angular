import { OrSunnet } from './../models/orsunnet';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SunnetService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrSunnetList(): Observable<OrSunnet[]> {
  
    let newPath = (environment.getApiUrl + "/orSunnets/getall")
    return this.httpClient.get<OrSunnet[]>(newPath)
  }


}

