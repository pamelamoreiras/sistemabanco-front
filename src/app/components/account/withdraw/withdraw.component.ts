import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountRequest } from 'src/app/models/account/account-request';
import { TransactionHistoryRequest } from 'src/app/models/account/transaction-history-request';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  account: AccountRequest = {
    accountNumber: '',
    document: ''
  }

  transactionRequest: TransactionHistoryRequest = {
    accountNumber: null,
    amount: null
  }

  amount: FormControl = new FormControl(null, Validators.required);
  accountNumber: FormControl = new FormControl(null, Validators.maxLength(6));


  constructor(
    private accountService: AccountService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    const accountNumberString = this.route.snapshot.paramMap.get('accountNumber');
    this.transactionRequest.accountNumber = parseInt(accountNumberString);
  }

  deposit(): void {
    this.accountService.deposit(this.transactionRequest).subscribe(response => {
      this.router.navigate(['accounts'])
      this.toast.success('Valor Depositado com Sucesso', 'Depósito');
    }, ex => {
      if(ex.error.errors){

        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  formValidators(): boolean {

    return this.amount.valid && this.accountNumber.valid;
  }
}