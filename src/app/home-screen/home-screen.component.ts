import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppDefinition, AppRegistryService } from '../app-registry.service';

@Component({
    selector: 'peblet-home-screen',
    templateUrl: './home-screen.component.html',
    styleUrls: ['./home-screen.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
/**
 * This component will provide the default homescreen as we're used to on Tablets or smartphones.
 * It has apps, a background, ...
 */
export class HomeScreenComponent {

  public readonly apps: AppDefinition[];

  constructor(appRegistry: AppRegistryService) {
    this.apps = appRegistry.getApps();
  }
}
