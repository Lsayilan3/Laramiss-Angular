import { OrPersonelTemini } from './../models/orpersoneltemini';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonelTeminiService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrPersonelTeminiList(): Observable<OrPersonelTemini[]> {
  
    let newPath = (environment.getApiUrl + "/orPersonelTeminis/getall")
    return this.httpClient.get<OrPersonelTemini[]>(newPath)
  }

}
