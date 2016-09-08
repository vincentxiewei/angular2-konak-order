import { Component, OnInit } from '@angular/core';
//import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import {Router, ActivatedRoute, Params}            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
//import { HeroSearchService } from './hero-search.service';
import { OrderService } from './../service/order.service';
import { Order } from './../model/Order';
import {Response, Http} from "@angular/http";
import {HeroService} from "../hero.service";

@Component({
  selector: 'order-confirmation',
  templateUrl: 'app/component/order-confirmation.component.html',
  //template: '<h1>this is the Order page</h1>',
  styleUrls:  ['app/component/order-confirmation.component.css'],
  providers: [OrderService]
})
export class OrderConfirmationComponent implements OnInit {

  //@Input()
  order: Order;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute) {
  }
  ngOnInit () :void {
    this.route.params.forEach ((params : Params) => {
        let id = +params['id'];
        this.orderService.getOrder(id).then(order => this.order = order);
      }
    )
  }
/*
  save(): void {
    this.heroService.update(this.hero)
      .then(this.goBack);
  }
  goBack(): void {
    window.history.back();
  }
 */
}
