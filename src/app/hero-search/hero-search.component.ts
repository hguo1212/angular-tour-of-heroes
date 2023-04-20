import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {
  debounceTime,distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent {
  heroes$!: Observable<Hero[]>;
  //Subject 既是可观察对象的数据源，本身也是 Observable。你可以像订阅任何 Observable 一样订阅 Subject。
  private searchTerms = new Subject<string>(); //Subject 类型

  constructor(private heroService: HeroService) {};
  search(term:string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string)=> this.heroService.searchHeroes(term))
    )
  }
}
