import { Ensonurun } from './../models/ensonurun';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnsonurunService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getEnsonurunList(): Observable<Ensonurun[]> {
  
    let newPath = this.apiUrl + "ensonuruns/getall"
    return this.httpClient.get<Ensonurun[]>(newPath)
  }

}
