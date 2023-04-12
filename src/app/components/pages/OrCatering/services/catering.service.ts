import { OrCatering } from './../models/orcatering';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CateringService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrCateringList(): Observable<OrCatering[]> {
  
    let newPath = (environment.getApiUrl + "/orCaterings/getall")
    return this.httpClient.get<OrCatering[]>(newPath)
  }

}
