import { GalleryTwo } from '../models/gallerytwo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GallerytwoService {

  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getGalleryTwoList(): Observable<GalleryTwo[]> {
  
    let newPath = this.apiUrl + "galleryTwoes/getall"
    return this.httpClient.get<GalleryTwo[]>(newPath)
  }

}
