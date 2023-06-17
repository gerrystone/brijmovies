import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {data} from "autoprefixer";

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.sass']
})
export class MovieslistComponent implements OnInit {
  public movieList:any
  hoverCard: number | null = null;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getMethod()
  }
  public getMethod(){
    this.http.get('https://moviesdatabase.p.rapidapi.com/titles/x/upcoming', {
      headers: new HttpHeaders().set("X-RapidAPI-Key", "650dbe08b6msh67af47a89fe2d43p1cdbfdjsna6743fa4f9cd")
    }).subscribe(
      (data)=>{
        this.movieList=data
      }
    )
  }
}
