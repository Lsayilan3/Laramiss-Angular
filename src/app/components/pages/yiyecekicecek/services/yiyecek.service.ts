import { Yiyecek } from './../models/yiyecek';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YiyecekService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';


  constructor(private httpClient: HttpClient) { }


  getYiyecekList(): Observable<Yiyecek[]> {
  
    let newPath = this.apiUrl + "yiyeceks/getall"
    return this.httpClient.get<Yiyecek[]>(newPath)
  }

}
