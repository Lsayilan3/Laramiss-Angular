import { OrAcilis } from './../models/oracilis';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcilisService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrAcilisList(): Observable<OrAcilis[]> {
  
    let newPath = (environment.getApiUrl + "/orAcilises/getall")
    return this.httpClient.get<OrAcilis[]>(newPath)
  }

}
