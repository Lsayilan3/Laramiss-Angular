import { OrKokteyl } from './../models/orkokteyl';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KokteylService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrKokteylList(): Observable<OrKokteyl[]> {
  
    let newPath = (environment.getApiUrl + "/orKokteyls/getall")
    return this.httpClient.get<OrKokteyl[]>(newPath)
  }

}
