import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Giorgos';
  lastName = 'Adamidis';

  person = {
    givenName: 'Giorgos',
    surName: 'Adamidis',
    age: 0x26,
    email: 'ga@aueb.gr'
    };
}
