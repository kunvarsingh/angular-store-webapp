import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-web-app';

  checkIfUserLogin(){
    return localStorage.getItem('username') && localStorage.getItem('password')
  }

  logout(){
    localStorage.clear();
  }
}
