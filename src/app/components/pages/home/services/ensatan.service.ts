import { Ensatan } from './../models/ensatan';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnsatanService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getEnsatanList(): Observable<Ensatan[]> {
  
    let newPath = this.apiUrl + "ensatans/getall"
    return this.httpClient.get<Ensatan[]>(newPath)
  }

}
