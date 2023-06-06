import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreateComponent } from './components/account/account-create/account-create.component';
import { AccountDetailsComponent } from './components/account/account-details/account-details.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { TransactionHistoryComponent } from './components/account/transaction-history/transaction-history.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { HomeComponent } from './components/home/home.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { DepositComponent } from './components/account/deposit/deposit.component';

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
      {
        path: 'clients/delete/:document', component: ClientDeleteComponent
      },

      {
        path: 'accounts', component: AccountListComponent
      },
      {
        path: 'accounts/details/:document', component: AccountDetailsComponent
      },
      {
        path: 'accounts/create/:document', component: AccountCreateComponent
      },
      {
        path: 'accounts/details/:document/history/:id', component: TransactionHistoryComponent
      },
      {
        path: 'accounts/details/:document/history/:id/deposit', component: DepositComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
