import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project.resolver';

@Component({
  selector: 'peblet-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent {

  public project!: Project

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({ project }) => {
      this.project = project
    })
  }

}
