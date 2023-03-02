import { OrTrioEkibi } from './../models/ortrioekibi';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrioEkibiService {


  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getOrTrioEkibiList(): Observable<OrTrioEkibi[]> {
  
    let newPath = this.apiUrl + "orTrioEkibis/getall"
    return this.httpClient.get<OrTrioEkibi[]>(newPath)
  }

}
