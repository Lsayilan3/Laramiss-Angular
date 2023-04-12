import { Hediyelik } from './../models/hediyelik';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HediyelikService {



  constructor(private httpClient: HttpClient) { }


getHediyelikList(): Observable<Hediyelik[]> {

  let newPath = (environment.getApiUrl + '/hediyeliks/getall')
  return this.httpClient.get<Hediyelik[]>(newPath)
}

}




// apiUrl = 'https://localhost:44375/WebAPI/api/';

// constructor(private httpClient: HttpClient) { }


// getEnsatanList(): Observable<Ensatan[]> {

//   let newPath = this.apiUrl + "ensatans/getall"
//   return this.httpClient.get<Ensatan[]>(newPath)
// }