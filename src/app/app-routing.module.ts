import { LoginComponent } from '@app/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { CareersListComponent } from './components/careers/careers-list/careers-list.component';
import { CareersAddComponent } from './components/careers/careers-add/careers-add.component';
import { Career } from './models/career/career.model';
import { CareerDetailComponent } from './components/careers/career-detail/career-detail.component';

const routes: Routes = [

  { path: '', component: CareersListComponent, canActivate: [AuthGuard] },
  { path: 'careers', component: CareersListComponent, canActivate: [AuthGuard] },
  { path: 'career/add', component: CareersAddComponent, canActivate: [AuthGuard] },
  { path: 'career/edit', component: CareersAddComponent, canActivate: [AuthGuard] },
  { path: 'career/detail', component: CareerDetailComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
