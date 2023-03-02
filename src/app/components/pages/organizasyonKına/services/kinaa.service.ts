import { OrKinaa } from '../models/orkinaa';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KinaaService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrKinaaList(): Observable<OrKinaa[]> {
  
    let newPath = this.apiUrl + "orKinaas/getall"
    return this.httpClient.get<OrKinaa[]>(newPath)
  }


}


