import { Blog } from './../models/blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  
constructor(private httpClient: HttpClient) { }


getBlogList(): Observable<Blog[]> {

  let newPath = (environment.getApiUrl  + "/blogs/getall")
  return this.httpClient.get<Blog[]>(newPath)
}


}
