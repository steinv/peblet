import { ChangeDetectionStrategy, Component } from '@angular/core';
import projects from '../projects.json';

@Component({
  selector: 'peblet-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioComponent {
  public projects = projects;
}
