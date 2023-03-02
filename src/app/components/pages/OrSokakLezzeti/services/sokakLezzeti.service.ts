import { OrSokakLezzeti } from './../models/orsokaklezzeti';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SokakLezzetiService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrSokakLezzetiList(): Observable<OrSokakLezzeti[]> {
  
    let newPath = this.apiUrl + "orSokakLezzetis/getall"
    return this.httpClient.get<OrSokakLezzeti[]>(newPath)

}
}