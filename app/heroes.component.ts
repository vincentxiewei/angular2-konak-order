import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";
//import {HEROES} from "./mock-heroes";
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  providers: [HeroService],
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  //hero = 'Windstorm';
  //hero: Hero = {id : 1, name : 'Windstorm'};
  selectedHero: Hero;
  heroes: Hero[];

  constructor (private heroService: HeroService,
    private router: Router) {}

  getHeroes(): void{
    this.heroService.getHeroes().then(heroes =>
      this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect (hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}


