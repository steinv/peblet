import { Component, Input } from '@angular/core';

@Component({
    selector: 'peblet-experience-list-item',
    templateUrl: './experience-list-item.component.html',
    styleUrls: ['./experience-list-item.component.scss'],
    standalone: false
})
export class ExperienceListItemComponent {
  @Input()
  public from!: Date | string | number;

  @Input()
  public until?: Date | string | number;

  @Input()
  public image?: string = undefined;

  @Input()
  public company!: string;

  @Input()
  public role!: string;
}
