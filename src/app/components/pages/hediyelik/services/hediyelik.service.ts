import { Hediyelik } from './../models/hediyelik';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HediyelikService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


getHediyelikList(): Observable<Hediyelik[]> {

  let newPath = this.apiUrl + "hediyeliks/getall"
  return this.httpClient.get<Hediyelik[]>(newPath)
}

}
