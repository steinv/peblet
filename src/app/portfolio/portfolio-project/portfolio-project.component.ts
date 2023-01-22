import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Project } from '../project.resolver';

@Component({
  selector: 'peblet-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioProjectComponent {

  public project!: Project

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.pipe(
      take(1),
    ).subscribe(({ project }) => {
      this.project = project
    })
  }

}
