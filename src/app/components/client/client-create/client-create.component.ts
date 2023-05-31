import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client/client';
import { ClientServiceService } from 'src/app/services/client.service.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    name: '',
    document: '',
    address: ''
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));
  document: FormControl = new FormControl(null, Validators.required);
  address: FormControl = new FormControl(null, Validators.maxLength(30));


  constructor(
    private clientService: ClientServiceService,
    private toast: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  create(): void {

    this.clientService.create(this.client).subscribe(response => {
      this.router.navigate(['clients'])
      this.toast.success('Cliente cadastrado com sucesso!', 'Cadastro');
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

    return this.name.valid && this.document.valid && this.address.valid;
  }

  teste(): any {
    this.toast.success("I'm a toast!", "Success!");
  }
}
