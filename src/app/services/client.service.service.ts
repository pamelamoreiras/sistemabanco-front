import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  baseUrl: string = "http://localhost:8080/api/v1/client"

  constructor(private http: HttpClient) { }

  findByDocument(document: any): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/details/${document}`);
  }

  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}`);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}`, client);
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.baseUrl}/${client.document}`, client);
  }

  deleteByDocument(document: any): Observable<Client> {
    return this.http.delete<Client>(`${this.baseUrl}/${document}`);
    
  }
}
