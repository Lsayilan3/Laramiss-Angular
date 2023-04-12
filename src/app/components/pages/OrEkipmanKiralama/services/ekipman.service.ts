import { OrEkipman } from './../models/orekipman';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EkipmanService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrEkipmanList(): Observable<OrEkipman[]> {
  
    let newPath = (environment.getApiUrl +"/orEkipmans/getall")
    return this.httpClient.get<OrEkipman[]>(newPath)
  }

}
