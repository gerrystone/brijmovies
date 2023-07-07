import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, filter, switchMap} from "rxjs";
import {MovieService} from "../../../../services/movie.service";

interface Movie {
  title:string,
  results:any
}
@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.sass']
})
export class SearchmoviesComponent implements OnInit {
  constructor(private movieService: MovieService) { }
  hasSearched:boolean = false;
  loading:boolean = true
  public movieList:any
  searchControl:any = new FormControl
  ngOnInit(): void {
    this.movieService.searchMovies().subscribe((movies:(string | number)[]) =>{
        return movies
      },
      (error:any)=>{
        this.loading = false
      })
    this.hasSearched = true
  }
}
