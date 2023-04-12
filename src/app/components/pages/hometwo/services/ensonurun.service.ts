import { Ensonurun } from './../models/ensonurun';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnsonurunService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getEnsonurunList(): Observable<Ensonurun[]> {
  
    let newPath = (environment.getApiUrl + "/ensonuruns/getall")
    return this.httpClient.get<Ensonurun[]>(newPath)
  }

}
