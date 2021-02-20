import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { JwtInterceptor } from '@app/helpers/jwt.interceptor';
import { ErrorInterceptor } from '@app/helpers/error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from '@app/components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './components/home/home.component';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { CareersListComponent } from './components/careers/careers-list/careers-list.component';
import { CareersAddComponent } from './components/careers/careers-add/careers-add.component';
import { HeaderDefaultComponent } from './components/header/header-default/header-default.component';
import { CareerDetailComponent } from './components/careers/career-detail/career-detail.component';
import { DialogUpdatePointsComponent } from './components/careers/dialog-update-points/dialog-update-points.component';
import { PlayerAddComponent } from './components/players/player-add/player-add.component';
import { PlayerInfoComponent } from './components/players/player-info/player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CareersListComponent,
    CareersAddComponent,
    HeaderDefaultComponent,
    CareerDetailComponent,
    DialogUpdatePointsComponent,
    PlayerAddComponent,
    PlayerInfoComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonToggleModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
