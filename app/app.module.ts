import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }  from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { routing } from './app.routing';
import {DashboardComponent} from './dashboard.component';
import { HeroSearchComponent} from './hero-search.component';

//Order
import {OrderComponent} from './component/order.component';
import { OrderService }         from './service/order.service';
import { OrderConfirmationComponent} from './component/order-confirmation.component';

//Order


@NgModule({
  imports: [ BrowserModule, FormsModule,HttpModule,JsonpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing //],
    , Ng2BootstrapModule],
  declarations: [ AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    OrderComponent,
    OrderConfirmationComponent],
  providers: [HeroService, OrderService],
  bootstrap: [ AppComponent ]

})
export class AppModule { }
