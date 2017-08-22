import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountsOverviewComponent } from "app/banking/accounts/accounts-overview.component";
import { AccountHistoryComponent } from "app/banking/accounts/account-history.component";
import { BankingMessagesResolve } from "app/banking/banking-messages.resolve";
import { LoggedUserGuard } from "app/logged-user-guard";
import { PerformPaymentComponent } from "app/banking/payments/perform-payment.component";

const accountRoutes: Routes = [
  {
    path: '',
    resolve: {
      bankingMessages: BankingMessagesResolve
    },
    canActivateChild: [LoggedUserGuard],
    children: [
      {
        path: 'accounts',
        component: AccountsOverviewComponent
      },
      {
        path: 'accounts/:type',
        component: AccountHistoryComponent
      },
      {
        path: 'payment',
        component: PerformPaymentComponent
      }
    ]
  }
];

/**
 * This module declares the routes in the accounts module
 */
@NgModule({
  imports: [
    RouterModule.forChild(accountRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    BankingMessagesResolve
  ]
})
export class AccountsRoutingModule {}