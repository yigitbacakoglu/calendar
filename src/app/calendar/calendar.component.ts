import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }
  Arr = Array;
  dates = ["2019-09-30", "2019-10-01", "2019-10-02", "2019-10-03", "2019-10-04", "2019-10-05", "2019-10-06", "2019-10-07", "2019-10-08", "2019-10-09", "2019-10-10", "2019-10-11", "2019-10-12", "2019-10-13", "2019-10-14", "2019-10-15", "2019-10-16", "2019-10-17", "2019-10-18", "2019-10-19", "2019-10-20", "2019-10-21", "2019-10-22", "2019-10-23", "2019-10-24", "2019-10-25", "2019-10-26", "2019-10-27", "2019-10-28", "2019-10-29", "2019-10-30"]
  rooms = [{ 'class': 'someClass', 'name': 'SomeName' }];
  rates = [];
  events = [];
  ngOnInit() {

  }

}
