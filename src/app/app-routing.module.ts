import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./pages/landing/landing.component";
import {LoginComponent} from "./pages/login/login.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {MovieslistComponent} from "./pages/dashboard/components/movieslist/movieslist.component";
import {SearchmoviesComponent} from "./pages/dashboard/components/searchmovies/searchmovies.component";
import {SuggestmoviesComponent} from "./pages/dashboard/components/suggestmovies/suggestmovies.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {path:'home', component:LandingComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'latest-movies', component:MovieslistComponent, canActivate:[AuthGuard]},
  {path:'search-movies', component:SearchmoviesComponent, canActivate:[AuthGuard]},
  {path:'suggest-movies', component:SuggestmoviesComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
