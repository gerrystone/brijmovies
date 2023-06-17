import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {gsap} from 'gsap'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {
  @ViewChild('landingText') landingText!:ElementRef
  @ViewChild('landingTextBig') landingTextBig!:ElementRef
  @ViewChild('landingText1') landingText1!:ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    //For the first text
    gsap.from(this.landingText.nativeElement, {
      duration:2,
      y:-100,
      opacity:0,
      ease:'power1.out'
    })
    //The middle text
    gsap.from(this.landingTextBig.nativeElement, {
      duration:2,
      y:100,
      opacity:0,
      ease:'bounce.out',
      delay:.5
    })
    //The bottom Text
    gsap.from(this.landingText1.nativeElement, {
      duration:2,
      y:150,
      opacity:0,
      ease:'power3.out',
      delay:1
    })
  }

}
