import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isScrolled = false;

  menutems  = [
    {key:'home',link:'home'}
  ]

  scrollToSection(sectionId:string){
    const element = document.getElementById(sectionId)
    if(element){
      element.scrollIntoView({
        behavior:'smooth',
        block:'start',
        inline:'nearest'
      })
    }
  }

 
}
