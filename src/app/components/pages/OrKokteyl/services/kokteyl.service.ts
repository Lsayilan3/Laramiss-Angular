import { OrKokteyl } from './../models/orkokteyl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KokteylService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrKokteylList(): Observable<OrKokteyl[]> {
  
    let newPath = this.apiUrl + "orKokteyls/getall"
    return this.httpClient.get<OrKokteyl[]>(newPath)
  }

}
