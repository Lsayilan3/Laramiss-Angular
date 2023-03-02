import { OrSunnet } from './../models/orsunnet';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SunnetService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrSunnetList(): Observable<OrSunnet[]> {
  
    let newPath = this.apiUrl + "orSunnets/getall"
    return this.httpClient.get<OrSunnet[]>(newPath)
  }


}

