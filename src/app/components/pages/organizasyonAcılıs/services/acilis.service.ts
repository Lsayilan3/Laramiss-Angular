import { OrAcilis } from './../models/oracilis';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcilisService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrAcilisList(): Observable<OrAcilis[]> {
  
    let newPath = this.apiUrl + "orAcilises/getall"
    return this.httpClient.get<OrAcilis[]>(newPath)
  }

}
