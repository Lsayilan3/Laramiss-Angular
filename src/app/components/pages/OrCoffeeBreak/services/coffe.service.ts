import { OrCoffe } from './../models/orcoffe';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoffeService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrCoffeList(): Observable<OrCoffe[]> {
  
    let newPath = (environment.getApiUrl +"/orCofves/getall")
    return this.httpClient.get<OrCoffe[]>(newPath)
  }
}
