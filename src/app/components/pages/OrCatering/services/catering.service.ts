import { OrCatering } from './../models/orcatering';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CateringService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrCateringList(): Observable<OrCatering[]> {
  
    let newPath = this.apiUrl + "orCaterings/getall"
    return this.httpClient.get<OrCatering[]>(newPath)
  }

}
