import { Component } from '@angular/core';
import { AuthService } from './auth.service';

//Logica de negocio
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VNT Booptcamp';

  constructor(private authService: AuthService){

  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }
}
