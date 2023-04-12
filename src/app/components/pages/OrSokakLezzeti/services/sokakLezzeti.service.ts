import { OrSokakLezzeti } from './../models/orsokaklezzeti';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SokakLezzetiService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrSokakLezzetiList(): Observable<OrSokakLezzeti[]> {
  
    let newPath = (environment.getApiUrl + "/orSokakLezzetis/getall")
    return this.httpClient.get<OrSokakLezzeti[]>(newPath)

}
}