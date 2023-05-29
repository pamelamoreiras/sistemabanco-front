import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { ClientDetails } from 'src/app/models/client-details';
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

  constructor(
    private clientService: ClientServiceService,
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
}

