import { Muzik } from './../models/muzik';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MuzikService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getMuzikList(): Observable<Muzik[]> {
  
    let newPath = (environment.getApiUrl + "/muziks/getall")
    return this.httpClient.get<Muzik[]>(newPath)
  }

}
