import {Component,OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {MovieService} from "../../../../services/movie.service";

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.sass']
})

export class MovieslistComponent implements OnInit {
  public movieList:any
  private apiUrl = environment.apiUrl
  private apiKey = environment.apiKey
  loading:boolean = true
  hoverCard: number | null = null;
  constructor(private http:HttpClient, private movielist:MovieService) { }

  ngOnInit(): void {
    this.getMethod()
  }
  public getMethod(){
    this.movieList = this.movielist.getMovieList()
  }
}
