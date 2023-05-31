import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account';
import { AccountRequest } from '../models/account-request';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = "http://localhost:8080/api/v1/account"

  constructor(private http: HttpClient) { }

  createAccount(account: AccountRequest): Observable<AccountRequest> {
    return this.http.post<AccountRequest>(`${this.baseUrl}`, account)
  }
}
