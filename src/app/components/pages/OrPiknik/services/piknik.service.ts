import { OrPiknik } from './../models/orpiknik';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PiknikService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrPiknikList(): Observable<OrPiknik[]> {
  
    let newPath = this.apiUrl + "orPikniks/getall"
    return this.httpClient.get<OrPiknik[]>(newPath)
  }

}
