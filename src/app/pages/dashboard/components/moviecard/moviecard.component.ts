import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.sass']
})
export class MoviecardComponent implements OnInit {
  @Input() title: string ='';
  @Input() year: string ='';
  @Input() type: string ='';
  @Input() image: any;
  @Input() index: number =0;
  hoverCard: number | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
