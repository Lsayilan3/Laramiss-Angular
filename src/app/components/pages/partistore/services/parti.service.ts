import { Observable } from 'rxjs';
import { Parti } from './../models/parti';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartiService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getPartiList(): Observable<Parti[]> {
  
    let newPath = this.apiUrl + "partis/getall"
    return this.httpClient.get<Parti[]>(newPath)
  }

}
