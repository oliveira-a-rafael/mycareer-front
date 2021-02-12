import { LoginComponent } from '@app/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
