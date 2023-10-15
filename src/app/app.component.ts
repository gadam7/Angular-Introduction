import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Giorgos';
  lastName = 'Adamidis';

  person: Person = {
    givenName: 'Giorgos',
    surName: 'Adamidis',
    age: 0x26,
    email: 'ga@aueb.gr',
    address: 'Kos, Greece'
  };

  person2: Person = {
    givenName: 'Thomas',
    surName: 'Adamidis',
    age: 0x2a,
    email: 'ta@aueb.gr',
    address: 'Kos, Greece'
  };
}
