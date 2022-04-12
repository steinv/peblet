import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'peblet-portfolio-list-item',
  templateUrl: './portfolio-list-item.component.html',
  styleUrls: ['./portfolio-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioListItemComponent {

  @Input()
  public image!: string;
  @Input()
  public name!: string;
  @Input()
  public technology!: string[];
}
