import { Injectable } from '@angular/core';
import { Order } from './../model/order';
//import { HEROES } from './mock-heroes';
import 'rxjs/add/operator/toPromise';
import {Headers, Http, Response}    from '@angular/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class OrderService {
/*
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  } // stub
*/
/*
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }
*/

 // private headers = new Headers({'Content-Type': 'application/json'});
//  private heroesUrl = 'app/heroes';  // URL to web api

  private konakOrderUrl = 'http://localhost:8080/order';  // URL to web api
  constructor(private http: Http) { }

  getOrders(): Promise<Order[]> {
    return this.http.get(this.konakOrderUrl)
      .toPromise()
      //.then(response => response.toString())
      .then(response => response.json() as Order[])
      .catch(this.handleError);
  }
/*
  //testURL = 'http://jsonplaceholder.typicode.com/posts/1';
  //testURL = 'http://www.thomas-bayer.com/sqlrest/CUSTOMER/';

  getOrdersOB() : Observable <Order[]> {

      return this.http.get(this.testURL)
        .map (this.extractData)
        .catch (this.handleErrorOB);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log("This is the response of jSon"+ body.data);
    return body.data || { };
  }
  private handleErrorOB (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
*/
/*
  getOrders2 (): Promise<Order[]> {
    return this.http.get(this.KonakOrderUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }
  */

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  /*


  getHero (id :number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  delete (id: number): Promise<void> {
    let url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }


 */
}
