import { OrPartiEglence } from './../models/orpartieglence';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartieglenceService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrPartiEglenceList(): Observable<OrPartiEglence[]> {
  
    let newPath = this.apiUrl + "orPartiEglences/getall"
    return this.httpClient.get<OrPartiEglence[]>(newPath)
  }

}
