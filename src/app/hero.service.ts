import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  // 把messageService注入heroService
  constructor(private messageService: MessageService) { }
  // HttpClient.get 会返回一个observable数据 可观察的对象
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   return heroes;
  // }

  getHeroes():Observable<Hero[]> {
    const heros = of(HEROES); // of of(HEROES) 会返回一个 Observable<Hero[]>，
    this.messageService.add('HeroService: fetched heroes');
    return heros;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
