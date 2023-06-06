import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';

// componentes do projeto
import { NavigateComponent } from './components/navigate/navigate.component';
import { HomeComponent } from './components/home/home.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ToastrModule } from 'ngx-toastr';
import { CpfPipe } from './cpf.pipe';
import { CpfFormatDirective } from './cpf-format.directive';
import { FormsModule } from '@angular/forms';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { AccountListComponent } from './components/account/account-list/account-list.component';
import { AccountDetailsComponent } from './components/account/account-details/account-details.component';
import { AccountCreateComponent } from './components/account/account-create/account-create.component';
import { TransactionHistoryComponent } from './components/account/transaction-history/transaction-history.component';
import { DepositComponent } from './components/account/deposit/deposit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    HomeComponent,
    ClientListComponent,
    ClientCreateComponent,
    CpfPipe,
    CpfFormatDirective,
    ClientUpdateComponent,
    ClientDeleteComponent,
    AccountListComponent,
    AccountDetailsComponent,
    AccountCreateComponent,
    TransactionHistoryComponent,
    DepositComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      progressBar: true
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
