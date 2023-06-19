import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  userlogin:string = localStorage.getItem('email')  || ''
  constructor() { }

  ngOnInit(): void {
  }
  isLoggedIn() {
    return !!localStorage.getItem('email'); // returns true if the user is logged in
  }
}
