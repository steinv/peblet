import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'peblet-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {

  public faCaretLeft = faChevronLeft; // I want faCaretLeft from regular icons but it's not there :(
  public faSquare = faSquare;
  public faCircle = faCircle;

  constructor(
    private readonly navigationService: NavigationService,
  ) { }

  public back(): void {
    this.navigationService.back();
  }

  public home(): void {
    this.navigationService.home();
  }

  public apps(): void {
    // TODO open modal with previously opened apps.
    console.log(this.navigationService.openedApps());
  }
}
