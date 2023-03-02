import { OrBaby } from './../models/orbaby';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BabyService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrBabyList(): Observable<OrBaby[]> {
  
    let newPath = this.apiUrl + "orBabies/getall"
    return this.httpClient.get<OrBaby[]>(newPath)
  }

}
