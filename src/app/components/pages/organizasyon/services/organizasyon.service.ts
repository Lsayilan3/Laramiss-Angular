import { Organizasyon } from './../models/organizasyon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizasyonService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrganizasyonList(): Observable<Organizasyon[]> {
  
    let newPath = this.apiUrl + "organizasyons/getall"
    return this.httpClient.get<Organizasyon[]>(newPath)
  }

}
