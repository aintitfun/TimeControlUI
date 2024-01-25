import { Component } from '@angular/core';

@Component({
  selector: 'app-user-time',
  templateUrl: './user-time.component.html',
  styleUrls: ['./user-time.component.css']
})
export class UserTimeComponent {
  selectedUser: string|any;
  timeEntries: { day: string, time: string }[] = [];

  users = ['User 1', 'User 2', 'User 3']; // Add your user data here

  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor() {
    // Initialize time entries for each day of the week
    this.daysOfWeek.forEach(day => {
      this.timeEntries.push({ day: day, time: '' });
    });
  }
}