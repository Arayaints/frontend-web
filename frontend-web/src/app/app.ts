import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./Layout/header/header";
import { Home } from "./Section/home/home";
import { About } from "./Section/about/about";
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [Header, Home, About],
  templateUrl: './app.html',
  
})
export class App {
  title = 'frontend-web'

}
