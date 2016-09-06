import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
//import { HeroSearchService } from './hero-search.service';
import { OrderService } from './../service/order.service';
import { Order } from './../model/Order';
@Component({
  selector: 'order',
  //templateUrl: 'app/hero-search.component.html',
  template: '<h1>this is the Order page</h1>',
  styleUrls:  ['app/hero-search.component.css'],
  providers: [OrderService]
})
export class OrderComponent implements OnInit {
  orders: Observable<Order[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private orderService: OrderService,
    private router: Router) {}

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
