import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from '../models/account/account';
import { AccountRequest } from '../models/account/account-request';
import { AccountResponse } from '../models/account/account-response';
import { TransactionHistoryResponse } from '../models/account/transaction-history-response';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl: string = "http://localhost:8080/api/v1/account"

  constructor(private http: HttpClient) { }

  createAccount(account: AccountRequest): Observable<AccountResponse> {
    return this.http.post<AccountResponse>(`${this.baseUrl}`, account)
  }

  deleteAccount(accountNumber: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${accountNumber}`);
  }

  getHistoryByAccountId(accountId: any): Observable<TransactionHistoryResponse> {
    return this.http.get<TransactionHistoryResponse>(`${this.baseUrl}/history/${accountId}`)
  }
}
