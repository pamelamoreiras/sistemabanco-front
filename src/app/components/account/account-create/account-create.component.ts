import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Account } from 'src/app/models/account/account';
import { AccountRequest } from 'src/app/models/account/account-request';
import { ClientDetails } from 'src/app/models/client/client-details';
import { AccountService } from 'src/app/services/account.service';
import { ClientServiceService } from 'src/app/services/client.service.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent {

  client: ClientDetails = {
    name: '',
    document: '',
    address: '',
    accounts: []
  }

  account: AccountRequest = {
    accountNumber: '',
    document: ''
  }

  documentToAccount: FormControl = new FormControl(null, Validators.required);
  accountNumber: FormControl = new FormControl(null, Validators.maxLength(6));


  constructor(
    private clientService: ClientServiceService,
    private accountService: AccountService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.client.document = this.route.snapshot.paramMap.get('document');
    this.findByDocument();
  }

  findByDocument(): void {
    this.clientService.findByDocument(this.client.document).subscribe( response => {
      this.client = response;
    })
  }

  create(): void {

    this.account.document = this.client.document;


    this.accountService.createAccount(this.account).subscribe(response => {

      this.router.navigate(['accounts'])
      this.toast.success('Conta cadastrada com sucesso!', 'Cadastro');
    }, ex => {
      if(ex.error.errors){
    console.log(this.account.document);
    console.log(this.account.accountNumber);

        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  formValidators(): boolean {

    return this.documentToAccount.valid && this.accountNumber.valid;
  }
}
