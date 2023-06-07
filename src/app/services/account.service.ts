import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountRequest } from '../models/account/account-request';
import { AccountResponse } from '../models/account/account-response';
import { TransactionHistoryResponse } from '../models/account/transaction-history-response';
import { TransactionHistoryRequest } from '../models/account/transaction-history-request';

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

  getHistoryByAccountId(accountId: any): Observable<TransactionHistoryResponse[]> {
    return this.http.get<TransactionHistoryResponse[]>(`${this.baseUrl}/history/${accountId}`)
  }

  deposit(transactionRequest: TransactionHistoryRequest): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/deposit`, transactionRequest)
  }

  withdraw(transactionRequest: TransactionHistoryRequest): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/withdraw`, transactionRequest)
  }
}
