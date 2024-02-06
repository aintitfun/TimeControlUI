import { Component } from '@angular/core';

@Component({
  selector: 'app-logout-now',
  templateUrl: './logout-now.component.html',
  styleUrls: ['./logout-now.component.css']
})
export class LogoutNowComponent {
  selectedUser: string|any;

  users = ['User 1', 'User 2', 'User 3']; // Add your user data here

  logout() {
    
  }
}
