import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.css']
})
export class NavigateComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['accounts'])
  }

}
