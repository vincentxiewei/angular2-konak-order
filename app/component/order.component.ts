//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
//import { HeroSearchService } from './hero-search.service';
import { OrderService } from './../service/order.service';
import { Order } from './../model/Order';
@Component({
  selector: 'order',
  templateUrl: 'app/component/order.component.html',
  //template: '<h1>this is the Order page</h1>',
  styleUrls:  ['app/component/order.component.css'],
  providers: [OrderService]
})
//export class OrderComponent implements OnInit {
  export class OrderComponent {
  //orders: Observable<Order[]>;
  //private searchTerms = new Subject<string>();

    powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

    countries = ['Australia', 'China', 'America'];

    order = new Order(18, 'Vincent', 'Xie',
                'Dr IQ', this.powers[0], 'Chuck Overstreet');

    active = true;


    submitted = false;

    onSubmit () {
      this.submitted = true;
      console.log("form has been submitted");
    }

// TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.order); }

  constructor(
    private orderService: OrderService,
    private router: Router) {}

  resetOrder() {
    this.order = new Order(24, "","","","");
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  ngOnInit(): void {

  }

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
