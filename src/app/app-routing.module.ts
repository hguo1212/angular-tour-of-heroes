import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes=[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //默认路由
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component:HeroDetailComponent},
  {path:'dashboard', component:DashboardComponent}

]

// @NgModule 元数据会初始化路由器，并开始监听浏览器地址的变化
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
