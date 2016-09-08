import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent }      from './hero-detail.component';

import { OrderComponent }      from './component/order.component';
import {OrderConfirmationComponent} from "./component/order-confirmation.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/order',
    pathMatch: 'full'
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'orderConfirmation/:id',
    component: OrderConfirmationComponent
  },
/*  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
 */ {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
];

export const routing: ModuleWithProviders =
  RouterModule.forRoot (appRoutes);
