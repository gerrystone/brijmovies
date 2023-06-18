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
  searchControl:any = new FormControl
  public movieList:any
  loading:boolean = false
  hasSearched = false;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(1000), // Wait for the user to stop typing for 1 second
      distinctUntilChanged(), //Only emit when the current value is different from the last one
      filter((text:string )=> text.length >=3), // Only search when the text length is 3 or more
      switchMap((searchString:string) => {
        this.loading = true
        this.hasSearched = true // To check the user has searched. This will be used to display the not found message if the response has no results
        return this.movieService.searchMovies(searchString)
      })
    ).subscribe((movies:any) =>{
      this.movieList =movies
      this.loading = false
    },
      (error:any)=>{
        this.loading = false
      })
  }
}
