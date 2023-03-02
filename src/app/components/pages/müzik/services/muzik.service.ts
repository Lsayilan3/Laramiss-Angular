import { Muzik } from './../models/muzik';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuzikService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getMuzikList(): Observable<Muzik[]> {
  
    let newPath = this.apiUrl + "muziks/getall"
    return this.httpClient.get<Muzik[]>(newPath)
  }

}
