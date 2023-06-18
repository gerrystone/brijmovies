import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ToastService} from "angular-toastify";

@Component({
  selector: 'app-suggestmovies',
  templateUrl: './suggestmovies.component.html',
  styleUrls: ['./suggestmovies.component.sass']
})

export class SuggestmoviesComponent implements OnInit {
  suggestMovieForm = new FormGroup({
    type:new FormControl('suggestNew'),
    reason: new FormControl(''),
    image:new FormControl('')
  })
  suggestMovies:any
  constructor(private toastService:ToastService) { }

  ngOnInit(): void {
    this.fetchMovies()
  }
  onSubmit():void {
    // Check if there's already data in localStorage
    let existingMovies = JSON.parse(localStorage.getItem('suggestedMovies') ?? '[]') ;
    // Push the new movie data to the existingMovies array
    existingMovies.push(this.suggestMovieForm.value);
    // Store the updated array back in localStorage
    localStorage.setItem('suggestedMovies', JSON.stringify(existingMovies));
    this.suggestMovieForm.reset()
    this.toastService.success("Recommendation saved successfully")
    this.fetchMovies()
  }
  handleFileInput(event:any):void{
    const file = event.target.files[0];
    const reader = new  FileReader()
    reader.onload = ()=>{
      this.suggestMovieForm.controls["image"].setValue(reader.result as string)
    }
    reader.readAsDataURL(file)
  }
  // Function that fetches movies from local storage
  fetchMovies() {
    const savedMovies = localStorage.getItem('suggestedMovies')
    this.suggestMovies = savedMovies ? JSON.parse(savedMovies) || '[]' : null
  }
}
