import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'peblet-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
