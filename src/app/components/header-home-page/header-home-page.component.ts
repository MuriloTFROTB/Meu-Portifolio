import { Component, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header-home-page',
  standalone: true,
  imports: [],
  templateUrl: './header-home-page.component.html',
  styleUrl: './header-home-page.component.css'
})
export class HeaderHomePageComponent {
  scrollToProjects(): void {
    const projectsSection = document.querySelector('app-list-projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
