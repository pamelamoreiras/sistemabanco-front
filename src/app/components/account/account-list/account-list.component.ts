import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/models/client/client';
import { ClientDetails } from 'src/app/models/client/client-details';
import { ClientServiceService } from 'src/app/services/client.service.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit{

  ELEMENT_DATA: ClientDetails[] = [
    {
      name: 'Pamela Moreira',
      document: '14496107651',
      address: 'Rua Nilo',
      accounts: []
    }
  ]

  displayedColumns: string[] = ['name', 'document', 'address', 'visibility', 'add-account'];
  dataSource = new MatTableDataSource<Client>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private clientService: ClientServiceService) { }

  ngOnInit(): void {
    this.findAll();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  findAll() {
    this.clientService.findAllClientsDetails().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Client>(response);
      this.dataSource.paginator = this.paginator;
    })
  }

}
