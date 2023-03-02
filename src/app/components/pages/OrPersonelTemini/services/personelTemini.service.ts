import { OrPersonelTemini } from './../models/orpersoneltemini';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonelTeminiService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrPersonelTeminiList(): Observable<OrPersonelTemini[]> {
  
    let newPath = this.apiUrl + "orPersonelTeminis/getall"
    return this.httpClient.get<OrPersonelTemini[]>(newPath)
  }

}
