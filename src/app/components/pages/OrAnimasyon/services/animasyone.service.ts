import { OrAnimasyone } from './../models/oranimasyone';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimasyoneService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrAnimasyoneList(): Observable<OrAnimasyone[]> {
  
    let newPath = this.apiUrl + "orAnimasyones/getall"
    return this.httpClient.get<OrAnimasyone[]>(newPath)
  }

}
