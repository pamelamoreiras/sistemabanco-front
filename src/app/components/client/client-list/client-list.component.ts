import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/models/client/client';
import { ClientServiceService } from 'src/app/services/client.service.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  ELEMENT_DATA: Client[] = [
    {
      name: 'Pamela Moreira',
      document: '14496107651',
      address: 'Rua Nilo'
    }
  ]

  displayedColumns: string[] = ['name', 'document', 'address', 'actions'];
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
    this.clientService.findAll().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Client>(response);
      this.dataSource.paginator = this.paginator;
    })
  }

}
