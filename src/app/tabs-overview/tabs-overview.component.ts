import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppDefinition, AppRegistryService } from '../app-registry.service';
import { NavigationService } from '../navigation.service';

export interface TabPreview extends AppDefinition {
  url: string;
}

@Component({
  selector: 'peblet-tabs-overview',
  templateUrl: './tabs-overview.component.html',
  styleUrls: ['./tabs-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsOverviewComponent {

  constructor(
    public readonly navigationService: NavigationService,
    private readonly appRegistry: AppRegistryService,
    private readonly router: Router,
  ) { }

  public get previews(): TabPreview[] {
    return this.navigationService.openedApps()
      .slice()
      .reverse()
      .flatMap(url => {
        const app = this.appRegistry.findByUrl(url);
        return app ? [{ ...app, url }] : [];
      });
  }

  public open(url: string): void {
    this.navigationService.closeTabs();
    this.router.navigateByUrl(url);
  }

  public clearAll(): void {
    this.navigationService.closeAllApps();
  }
}
