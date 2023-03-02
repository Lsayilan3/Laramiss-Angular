import { Blog } from './../models/blog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  
constructor(private httpClient: HttpClient) { }


getBlogList(): Observable<Blog[]> {

  let newPath = this.apiUrl + "blogs/getall"
  return this.httpClient.get<Blog[]>(newPath)
}


}
