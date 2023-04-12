import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  
  apiUrl = 'https://localhost:44375/WebAPI/api/';

  constructor(private httpClient: HttpClient) { }


  getCategoryList(): Observable<Category[]> {
  
    let newPath = (environment.getApiUrl + "/spotCategoryies/getall")
    return this.httpClient.get<Category[]>(newPath)
  }


  getCategoryById(categoryId: any):Observable<Category>{
    let newPath = (environment.getApiUrl + "/spotCategoryies/getbyid/?categoryId=" +categoryId)
    return this.httpClient.get<Category>(newPath)
  }
}
