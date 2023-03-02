import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cikolata } from '../models/cikolata';

@Injectable({
  providedIn: 'root'
})
export class cikolataService {
  
  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrCikolataList(): Observable<Cikolata[]> {
  
    let newPath = this.apiUrl + "cikolatas/getall"
    return this.httpClient.get<Cikolata[]>(newPath)
  }

}
