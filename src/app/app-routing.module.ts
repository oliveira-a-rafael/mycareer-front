import { LoginComponent } from '@app/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { CareerListComponent } from './components/career/career-list/career-list.component';
import { CareerAddComponent } from './components/career/career-add/career-add.component';
import { CareerDetailComponent } from './components/career/career-detail/career-detail.component';
import { PlayerAddComponent } from './components/player/player-add/player-add.component';

const routes: Routes = [

  { path: '', component: CareerListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'careers', component: CareerListComponent, canActivate: [AuthGuard] },
  { path: 'career/add', component: CareerAddComponent, canActivate: [AuthGuard] },
  { path: 'career/edit', component: CareerAddComponent, canActivate: [AuthGuard] },
  { path: 'career/detail', component: CareerDetailComponent, canActivate: [AuthGuard] },
  { path: 'career/:id/add-player', component: PlayerAddComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
