import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  moduleId : module.id,
  selector: 'app-home',
  templateUrl: './home.component.html', // стартовая страница
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Hello, click the log in';
  constructor(private auth: AuthService) { }
}

