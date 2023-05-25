import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/models/client';
import { ClientServiceService } from 'src/app/services/client.service.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent {
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

  update(): void {

    this.clientService.update(this.client).subscribe(response => {
      this.router.navigate(['clients'])
      this.toast.success('Cliente atualizado com sucesso!', 'Atualização');
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
