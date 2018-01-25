import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  template: `
  <p>The Hero's birthday is {{birthday | date}} </p> 
  <p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }} </p>
  <p>The Hero's birthday is {{birthday | date :format}}</p>
  <button (click)="toggleFormat()">Toggle Format</button>
  <p>The Hero's birthday is {{birthday | date :'fullDate'| uppercase}}</p>
  `,
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  birthday= new Date (1983 , 3 , 12);
  toggle = true;

  get format()
  {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat()
  {
    this.toggle = !this.toggle;
  }
  constructor() { }

  ngOnInit() {
  }

}
