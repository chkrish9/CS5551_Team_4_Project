import { Component } from '@angular/core';
import {AuthService} from './services/common/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  constructor(
    private authService:AuthService,
  ) { }
}