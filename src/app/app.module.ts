import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { SidebarComponent } from './pages/dashboard/components/sidebar/sidebar.component';
import { DashboardHeaderComponent } from './pages/dashboard/components/dashboard-header/dashboard-header.component';
import { MovieslistComponent } from './pages/dashboard/components/movieslist/movieslist.component';
import {HttpClientModule} from "@angular/common/http";
import {SwahiliPipe} from "./pipes/swahili.pipe";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AngularToastifyModule} from "angular-toastify";
import { SearchmoviesComponent } from './pages/dashboard/components/searchmovies/searchmovies.component';
import { MoviecardComponent } from './pages/dashboard/components/moviecard/moviecard.component';
import { SkeletonComponent } from './pages/dashboard/components/skeleton/skeleton.component';
import { SuggestmoviesComponent } from './pages/dashboard/components/suggestmovies/suggestmovies.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    DashboardHeaderComponent,
    MovieslistComponent,
    SwahiliPipe,
    SearchmoviesComponent,
    MoviecardComponent,
    SkeletonComponent,
    SuggestmoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    AngularToastifyModule,
    ReactiveFormsModule
  ],
  exports: [SkeletonComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
