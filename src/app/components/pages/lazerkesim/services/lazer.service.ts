import { Lazer } from './../models/lazer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LazerService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getLazerList(): Observable<Lazer[]> {
  
    let newPath = (environment.getApiUrl + "/lazers/getall")
    return this.httpClient.get<Lazer[]>(newPath)
  }

}
