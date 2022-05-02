import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Kasteh';
  userData = {
    email: 'kasteh@email.com',
    role: 'admin'
  }
  title = 'CursoAngular';
}
