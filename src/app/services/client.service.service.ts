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

  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}`)
  }
}
