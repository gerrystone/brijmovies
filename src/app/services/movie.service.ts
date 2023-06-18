import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = environment.searchApiKey
  constructor(private http:HttpClient) { }
  searchMovies(query: string): Observable<any> {
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}
