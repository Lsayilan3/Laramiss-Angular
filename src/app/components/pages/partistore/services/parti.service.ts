import { Observable } from 'rxjs';
import { Parti } from './../models/parti';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartiService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getPartiList(): Observable<Parti[]> {
  
    let newPath = (environment.getApiUrl + "/partis/getall")
    return this.httpClient.get<Parti[]>(newPath)
  }

}
