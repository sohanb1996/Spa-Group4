import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategories } from './category';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseurl = 'http://localhost:64761/api/ServiceType/GetServiceTypeById/';
  private url;
  constructor(private http: HttpClient) { }

  getCategories(parameter: string): Observable<ICategories[]> {
    this.url = this.baseurl + parameter;
    console.log(this.url);
    return this.http.get<ICategories[]>(this.url);
  }

}