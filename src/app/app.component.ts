import {AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit{
  title = 'moviesbrij';
  @ViewChild('content', { static: false }) content?: ElementRef;
  ngAfterViewInit() {
    if (this.content) {
      gsap.from(this.content.nativeElement, {
        x: '-100%',
        opacity: 0,
        duration: 1,
        ease: 'power3.inOut'
      });
    }
  }

}
