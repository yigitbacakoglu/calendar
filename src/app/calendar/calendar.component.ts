import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }
  Arr = Array;
  dates = [{"weekend":false,"day":"01","day_name":"Tue","month_name":"Oct"},{"weekend":false,"day":"02","day_name":"Wed","month_name":"Oct"},{"weekend":false,"day":"03","day_name":"Thu","month_name":"Oct"},{"weekend":false,"day":"04","day_name":"Fri","month_name":"Oct"},{"weekend":true,"day":"05","day_name":"Sat","month_name":"Oct"},{"weekend":true,"day":"06","day_name":"Sun","month_name":"Oct"},{"weekend":false,"day":"07","day_name":"Mon","month_name":"Oct"},{"weekend":false,"day":"08","day_name":"Tue","month_name":"Oct"},{"weekend":false,"day":"09","day_name":"Wed","month_name":"Oct"},{"weekend":false,"day":"10","day_name":"Thu","month_name":"Oct"},{"weekend":false,"day":"11","day_name":"Fri","month_name":"Oct"},{"weekend":true,"day":"12","day_name":"Sat","month_name":"Oct"},{"weekend":true,"day":"13","day_name":"Sun","month_name":"Oct"},{"weekend":false,"day":"14","day_name":"Mon","month_name":"Oct"},{"weekend":false,"day":"15","day_name":"Tue","month_name":"Oct"},{"weekend":false,"day":"16","day_name":"Wed","month_name":"Oct"},{"weekend":false,"day":"17","day_name":"Thu","month_name":"Oct"},{"weekend":false,"day":"18","day_name":"Fri","month_name":"Oct"},{"weekend":true,"day":"19","day_name":"Sat","month_name":"Oct"},{"weekend":true,"day":"20","day_name":"Sun","month_name":"Oct"},{"weekend":false,"day":"21","day_name":"Mon","month_name":"Oct"},{"weekend":false,"day":"22","day_name":"Tue","month_name":"Oct"},{"weekend":false,"day":"23","day_name":"Wed","month_name":"Oct"},{"weekend":false,"day":"24","day_name":"Thu","month_name":"Oct"},{"weekend":false,"day":"25","day_name":"Fri","month_name":"Oct"},{"weekend":true,"day":"26","day_name":"Sat","month_name":"Oct"},{"weekend":true,"day":"27","day_name":"Sun","month_name":"Oct"},{"weekend":false,"day":"28","day_name":"Mon","month_name":"Oct"},{"weekend":false,"day":"29","day_name":"Tue","month_name":"Oct"},{"weekend":false,"day":"30","day_name":"Wed","month_name":"Oct"},{"weekend":false,"day":"31","day_name":"Thu","month_name":"Oct"}]

  rooms = [{ 'class': 'someClass', 'name': 'SomeName' }];
  rates = [];
  events = [];
  ngOnInit() {

  }

}
