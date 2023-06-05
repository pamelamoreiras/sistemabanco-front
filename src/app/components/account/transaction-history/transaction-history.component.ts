import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/models/account/account';
import { TransactionHistoryResponse } from 'src/app/models/account/transaction-history-response';
import { ClientDetails } from 'src/app/models/client/client-details';
import { AccountService } from 'src/app/services/account.service';
import { ClientServiceService } from 'src/app/services/client.service.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {
  selectedAccountId: any | null = null;

  client: ClientDetails = {
    name: '',
    document: '',
    address: '',
    accounts: []
  }

  account: Account = {
    id: '',
    accountNumber: '',
    balance: ''
  }

  ELEMENT_DATA: TransactionHistoryResponse[] = [
    {
      id: '',
      date: new Date(),
      amount: null
    }
  ]

  displayedColumns: string[] = ['amount', 'date'];
  dataSource = new MatTableDataSource<TransactionHistoryResponse>(this.ELEMENT_DATA);


  constructor(
    private clientService: ClientServiceService,
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService
    ) { }

  ngOnInit(): void {
    this.client.document = this.route.snapshot.paramMap.get('document');
    this.findByDocument();
    this.getTransactionHistory();
  }

  findByDocument(): void {
    this.clientService.findByDocument(this.client.document).subscribe( response => {
      this.client = response;
    })
  }

  getTransactionHistory(): void {

    this.account.id =  this.route.snapshot.paramMap.get('id');

    this.accountService.getHistoryByAccountId(this.account.id).subscribe(response => {
      this.ELEMENT_DATA = response
      this.dataSource = new MatTableDataSource<TransactionHistoryResponse>(this.ELEMENT_DATA);
    })
  }


}