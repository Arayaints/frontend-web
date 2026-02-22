import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./Layout/header/header";
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Header],
  templateUrl: './app.html',
  
})
export class App {
  title = 'frontend-web'

}
