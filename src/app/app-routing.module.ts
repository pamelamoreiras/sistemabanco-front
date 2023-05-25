import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { HomeComponent } from './components/home/home.component';
import { NavigateComponent } from './components/navigate/navigate.component';

const routes: Routes = [
  {
    path: '', component: NavigateComponent, children: [
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'clients', component: ClientListComponent
      },
      {
        path: 'clients/create', component: ClientCreateComponent
      },
      {
        path: 'clients/update/:document', component: ClientUpdateComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
