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
import { MatSortModule } from '@angular/material/sort';
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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

import { CareerListComponent } from './components/career/career-list/career-list.component';
import { CareerAddComponent } from './components/career/career-add/career-add.component';
import { HeaderDefaultComponent } from './components/header/header-default/header-default.component';
import { CareerDetailComponent } from './components/career/career-detail/career-detail.component';
import { DialogUpdatePointsComponent } from './components/career/dialog-update-points/dialog-update-points.component';
import { PlayerAddComponent } from './components/player/player-add/player-add.component';
import { PlayerInfoComponent } from './components/player/player-info/player-info.component';
import { PlayerListComponent } from './components/player/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CareerListComponent,
    CareerAddComponent,
    HeaderDefaultComponent,
    CareerDetailComponent,
    DialogUpdatePointsComponent,
    PlayerAddComponent,
    PlayerInfoComponent,
    PlayerListComponent,
  ],
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
    MatSortModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatExpansionModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
