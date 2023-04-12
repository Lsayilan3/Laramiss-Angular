import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spot } from '../models/spot';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getSpotListt(): Observable<Spot[]> {
  
    let newPath = (environment.getApiUrl + "/spots/getall")
    return this.httpClient.get<Spot[]>(newPath)

}

getSpotList(categoryId): Observable<Spot[]> {
  let newPath = (environment.getApiUrl + "/spots/getlist?categoryId=" +categoryId)
  return this.httpClient.get<Spot[]>(newPath)
}

getSpotCategoryById(spotId: any):Observable<Spot>{
let newPath = (environment.getApiUrl + "/spots/getbyid/?spotId=" +spotId)
return this.httpClient.get<Spot>(newPath)
}

}
