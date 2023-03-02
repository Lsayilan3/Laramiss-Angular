import { Lazer } from './../models/lazer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazerService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getLazerList(): Observable<Lazer[]> {
  
    let newPath = this.apiUrl + "lazers/getall"
    return this.httpClient.get<Lazer[]>(newPath)
  }

}
