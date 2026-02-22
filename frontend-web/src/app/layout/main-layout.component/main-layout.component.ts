import { Component } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { HeaderComponent } from '../header.component/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout.component',
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {

}
