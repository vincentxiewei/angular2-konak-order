import { Component, OnInit } from '@angular/core';
//import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
//import { HeroSearchService } from './hero-search.service';
import { OrderService } from './../service/order.service';
import { Order } from './../model/Order';
import {Response, Http} from "@angular/http";

@Component({
  selector: 'order',
  templateUrl: 'app/component/order.component.html',
  //template: '<h1>this is the Order page</h1>',
  styleUrls:  ['app/component/order.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService, private router: Router) {}

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  countries = ['Australia', 'China', 'America'];

  order = new Order();
  orders : Order[];

  //this is to reset the angular form for validation
  active = true;
  submitted = false;
  //Rest server message
  errorRESTAPI : string;
  orderCreatedOnServer = false;

  // New order submitted
  onSubmit () {
    this.submitted = true;
    console.log("form has been submitted");
    console.log(JSON.stringify(this.order));

    this.orderService.create(this.order)
      .then(order => {
          this.orders.push(order);
          this.orderCreated(order);
          this.order = order;
          //this.gotoOrderConfirmation(order);
      });
    console.log("completed form");
  }
  orderCreated (newOrder : Order) {
    console.log(newOrder.id + " "+ newOrder.firstName + " "+ newOrder.emailSent+" " +newOrder.emailSentTAD);

    if (newOrder.id && newOrder.emailSent) {
      this.orderCreatedOnServer = true;
    }
  }

  //this function resets order form
  resetOrder() {
    //this.order = new Order(24, "","","","");
    this.order = new Order();
    this.active = false;
    setTimeout(() => this.active = true, 0);
    this.submitted = false;
    this.orderCreatedOnServer = false;
  }
  ngOnInit(): void {
    console.log("Inside onInit");
    this.orderService.getOrders().then(orders =>
      this.orders = orders);
    console.log("completed inside onInit");
  }

  gotoOrderConfirmation( newOrder : Order): void {
    console.log("new Order is: "+newOrder.firstName);
    this.router.navigate(['/orderConfirmation', newOrder.id]);
    console.log("routing to confirmation finished: "+newOrder.firstName);
  }

  //TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.order) +
    JSON.stringify(this.orders); }
/*
  //orders: Order[];
  private konakOrderUrl = 'http://localhost:8080/order';
  getFoods() {
    this.http.get(this.konakOrderUrl)
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.orders = data},
        err => console.error(err),
        () => console.log('done')
      );
  }
    getOrdersTest() {
      this.orderService.getOrdersOB().subscribe (
        orders => this.orders = orders,
        error => this.errorMessage = <any> error);

    }
*/
  // Push a search term into the observable stream.
  /*
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
  */
}
