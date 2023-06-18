import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.sass']
})
export class MoviecardComponent implements OnInit {
  @Input() title: any;
  @Input() year: any;
  @Input() type: any;
  @Input() image: any;
  @Input() index: any;
  hoverCard: number | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
