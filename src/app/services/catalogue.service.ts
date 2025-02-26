import { Injectable } from '@angular/core';
import { Catalogue } from '../interfaces/catalogues.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  baseUrl = 'http://localhost:8085/catalogues'
  constructor(private http:HttpClient) { }
  
  create(catalogue:Catalogue){
    return this.http.post(`${this.baseUrl}/create-catalogue`,catalogue)
  }
  delete(id:number){
    return this.http.delete(`${this.baseUrl}/delete-catalogue/${id}`)
  }

  getById(id:string){
    return this.http.get(`${this.baseUrl}/search-catalogue/${id}`)
  }

  getAll():Observable<Catalogue[]>{
    return this.http.get<Catalogue[]>(`${this.baseUrl}/view-catalogues`)
  }
}
