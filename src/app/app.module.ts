import { NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
