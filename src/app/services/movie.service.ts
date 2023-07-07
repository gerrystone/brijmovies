import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {debounceTime, distinctUntilChanged, filter, Observable, switchMap} from "rxjs";
import {environment} from "../../environments/environment";
import {FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = environment.searchApiKey
  private apiUrl = environment.apiUrl

  loading:boolean = true
  constructor(private http:HttpClient) { }
  searchControl:any = new FormControl

  //Search movies
  constructurl(query: string): Observable<any> {
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
  searchMovies(){
    return this.searchControl.valueChanges.pipe(
      debounceTime(1000), // Wait for the user to stop typing for 1 second
      distinctUntilChanged(), //Only emit when the current value is different from the last one
      filter((text:string )=> text.length >=3), // Only search when the text length is 3 or more
      switchMap((searchString:string) => {
        this.loading = true
        return this.constructurl(searchString) //construct and send an HTTP request to the API based on the search query.
      })
    )
  }
  //Get the list of movies
  getMovieList(){
    return this.http.get(this.apiUrl, {
      headers: new HttpHeaders().set("X-RapidAPI-Key", this.apiKey)
    }).subscribe(
      (data)=>{
        return data
      }
    )
  }

}
