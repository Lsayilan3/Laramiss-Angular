import { OrSirketEglence } from './../models/orsirketeglence';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SirketEglenceService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrSirketEglenceList(): Observable<OrSirketEglence[]> {
  
    let newPath = (environment.getApiUrl + "/orSirketEglences/getall")
    return this.httpClient.get<OrSirketEglence[]>(newPath)
  }

}
