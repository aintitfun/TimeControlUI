// prohibited-apps.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-prohibited-apps',
  templateUrl: './prohibited-apps.component.html',
  styleUrls: ['./prohibited-apps.component.css']
})
export class ProhibitedAppsComponent {
  selectedUser: string|any;
  selectedApp: string|any;
  appToAdd: string|any;
  prohibitedAppsEntries: { app: string, time: string }[] = [];
  timeEntries: { day: string, time: string }[] = [];

  users = ['User 1', 'User 2', 'User 3']; // Add your user data here
  applications = ['App 1', 'App 2', 'App 3']; // Add your application data here

  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor() {
    // Initialize time entries for each day of the week
    this.daysOfWeek.forEach(day => {
      this.timeEntries.push({ day: day, time: '' });
    });
  }

  addProhibitedApp() {
    if (this.appToAdd && !this.prohibitedAppsEntries.find(entry => entry.app === this.appToAdd)) {
      this.prohibitedAppsEntries.push({ app: this.appToAdd, time: '' });
      this.appToAdd = '';
    }
  }

  deleteProhibitedApps() {
    // Implement deletion logic based on your requirements
    this.prohibitedAppsEntries = [];
  }

  updateProhibitedApps() {
    // Implement update logic based on your requirements
  }
}
