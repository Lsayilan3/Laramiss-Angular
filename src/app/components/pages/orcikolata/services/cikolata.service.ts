import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cikolata } from '../models/cikolata';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class cikolataService {
  
  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrCikolataList(): Observable<Cikolata[]> {
  
    let newPath = (environment.getApiUrl + "/cikolatas/getall")
    return this.httpClient.get<Cikolata[]>(newPath)
  }

}
