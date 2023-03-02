import { OrNisan } from './../models/ornisan';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NisanService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getNisanList(): Observable<OrNisan[]> {
  
    let newPath = this.apiUrl + "orNisans/getall"
    return this.httpClient.get<OrNisan[]>(newPath)
  }
}
