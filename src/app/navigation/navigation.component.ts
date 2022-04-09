import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { faSquare, faCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

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
    private readonly router: Router,
  ) { }

  public back(): void {

  }

  public home(): void {
    this.router.navigate(['/']);
  }

  public apps(): void {
    // TODO
  }
}
