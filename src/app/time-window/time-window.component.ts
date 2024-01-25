import { Component } from '@angular/core';

@Component({
  selector: 'app-calling-window',
  templateUrl: './time-window.component.html',
  styleUrls: ['./time-window.component.css']
})
export class TimeWindowComponent {
  selectedCaller: string|any;
  callTimeEntries: { day: string, startTime: string, endTime: string }[] = [];

  callers = ['Caller 1', 'Caller 2', 'Caller 3']; // Add your caller data here

  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor() {
    // Initialize time entries for each day of the week
    this.daysOfWeek.forEach(day => {
      this.callTimeEntries.push({ day: day, startTime: '', endTime: '' });
    });
  }
}
