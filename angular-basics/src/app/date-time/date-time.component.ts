import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'datetime',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit {

  dateTimeString: string;

  constructor() {
    this.dateTimeString = new Date().toLocaleString();

    setInterval(() => {
      this.dateTimeString = new Date().toLocaleString();
    }, 1000);

  }

  ngOnInit() {

  }

  add (a: number, b: number) {
    return a + b;
  }

}
