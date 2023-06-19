import {Component, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.sass']
})
export class DashboardHeaderComponent implements OnInit {
  menuOpen: boolean = false;
  menuBtnClick: boolean = false;
  userEmail: string | null = ''
  constructor(private renderer:Renderer2, private router:Router) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.menuBtnClick) {
        this.menuOpen = false;
      }
      this.menuBtnClick = false;
    });
  }

  ngOnInit(): void {
    this.userEmail = localStorage.getItem('email')
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  preventCloseOnClick() {
    this.menuBtnClick = true;
  }
  signOut() {
    localStorage.removeItem('email'); // assuming 'email' is what you're using to check logged in status
    this.router.navigate(['/home']); // navigate to login route after sign out
  }

}
