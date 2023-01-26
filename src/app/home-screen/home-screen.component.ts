import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faAddressCard, faBriefcase, faFolderOpen, faGear } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'peblet-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * This component will provide the default homescreen as we're used to on Tablets or smartphones.
 * It has apps, a background, ...
 */
export class HomeScreenComponent {
  faFolderOpen = faFolderOpen;
  faBriefcase = faBriefcase;
  faGear = faGear;
  faAddressCard = faAddressCard;
}
