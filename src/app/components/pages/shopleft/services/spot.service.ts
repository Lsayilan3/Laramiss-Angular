import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spot } from '../models/spot';

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getSpotListt(): Observable<Spot[]> {
  
    let newPath = this.apiUrl + "spots/getall"
    return this.httpClient.get<Spot[]>(newPath)

}

getSpotList(categoryId): Observable<Spot[]> {
  let newPath = this.apiUrl + "spots/getlist?categoryId=" +categoryId
  return this.httpClient.get<Spot[]>(newPath)
}

getSpotCategoryById(spotId: any):Observable<Spot>{
let newPath = this.apiUrl + "spots/getbyid/?spotId=" +spotId
return this.httpClient.get<Spot>(newPath)
}

}
