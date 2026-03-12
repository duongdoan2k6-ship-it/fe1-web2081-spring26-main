import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'my-app'; 
  fullName = ' Doan Tronng Duong';
  age = 19;

  handleClick() {
  alert("Bạn đã click button");
}


}
