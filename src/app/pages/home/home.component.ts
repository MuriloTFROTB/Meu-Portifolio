import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../_services/github.service';
import { HeaderHomePageComponent } from '../../components/header-home-page/header-home-page.component';
import { ListProjectsComponent } from '../../components/list-projects/list-projects.component';
import { AppBarComponent } from "../../components/app-bar/app-bar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderHomePageComponent, ListProjectsComponent, AppBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private gitService: GithubService) { }

  ngOnInit(): void {
    this.gitService.getUsuarios().subscribe({
      next: (response) => {
        console.log(response);
      },
    })
  }

  showProjects: boolean = false;

  toggleProjetcs() {
    this.showProjects = !this.showProjects;
  }
}
