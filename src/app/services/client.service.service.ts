import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client/client';
import { ClientDetails } from '../models/client/client-details';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  baseUrl: string = "http://localhost:8080/api/v1/client"

  constructor(private http: HttpClient) { }

  findByDocument(document: any): Observable<ClientDetails> {
    return this.http.get<ClientDetails>(`${this.baseUrl}/details/${document}`);
  }

  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}`);
  }

  findAllClientsDetails(): Observable<ClientDetails[]> {
    return this.http.get<ClientDetails[]>(`${this.baseUrl}/details`);
  }

  create(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.baseUrl}`, client);
  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.baseUrl}/${client.document}`, client);
  }

  deleteByDocument(document: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${document}`);
    
  }
}
