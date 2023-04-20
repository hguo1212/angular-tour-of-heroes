import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{
  constructor(private heroService: HeroService) {
    // 只做最小化的初始化操作，比如把构造函数的参数赋值给属性
  }
  heroes?:Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }
// .subscribe(heroes => this.heroes = heroes)
  getHeroes(): void {
    // 订阅数据
    this.heroService.getHeroes().subscribe(heroes=> this.heroes = heroes);
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes?.filter(h=> h ! ==hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
