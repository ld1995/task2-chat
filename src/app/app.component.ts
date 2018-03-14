import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  moduleId : module.id,
  selector: 'app-root',
  templateUrl: './app.component.html', // стартовая страница
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
