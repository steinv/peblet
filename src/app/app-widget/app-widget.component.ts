import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'peblet-app-widget',
  templateUrl: './app-widget.component.html',
  styleUrls: ['./app-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * This component uses input properties rather than content projection to have a consistent layout.
 */
export class AppWidgetComponent {

  @Input()
  public name: string = '';

  // TODO type of icon? + default value
  @Input()
  public icon: string = '/assets/android.png';
}
