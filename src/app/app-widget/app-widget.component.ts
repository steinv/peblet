import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

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

  @Input()
  public icon: IconProp = faAndroid;

  @Input()
  public bgColor: string = '';
}
