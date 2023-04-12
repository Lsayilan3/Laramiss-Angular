
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrDugun } from '../models/ordugun';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrDugunService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrDugunList(): Observable<OrDugun[]> {
  
    let newPath = (environment.getApiUrl + "/orDuguns/getall")
    return this.httpClient.get<OrDugun[]>(newPath)
  }
}
