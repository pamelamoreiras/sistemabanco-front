import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/models/account/account';
import { ClientDetails } from 'src/app/models/client/client-details';
import { AccountService } from 'src/app/services/account.service';
import { ClientServiceService } from 'src/app/services/client.service.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  client: ClientDetails = {
    name: '',
    document: '',
    address: '',
    accounts: []
  }

  account: Account = {
    numberAccount: '',
    balance: ''
  }

  ELEMENT_DATA: Account[] = [
    {
      numberAccount: '',
      balance: ''
    }
  ]

  displayedColumns: string[] = ['account', 'actions'];
  dataSource = new MatTableDataSource<Account>(this.client.accounts);


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
  }

  findByDocument(): void {
    this.clientService.findByDocument(this.client.document).subscribe( response => {
      this.client = response;
      this.ELEMENT_DATA = this.client.accounts
      this.dataSource = new MatTableDataSource<Account>(this.client.accounts);
    })
  }

  navigateToCreateAccount() {
    const documentId = this.client.document;
    this.router.navigateByUrl(`accounts/create/${documentId}`);
  }
}

