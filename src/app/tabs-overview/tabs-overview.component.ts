import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Type } from '@angular/core';
import { Router } from '@angular/router';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
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

  private readonly componentClasses = new Map<string, Type<unknown>>();
  private readonly injectors = new Map<string, Injector>();

  constructor(
    public readonly navigationService: NavigationService,
    private readonly appRegistry: AppRegistryService,
    private readonly router: Router,
    private readonly injector: Injector,
    private readonly changeDetectorRef: ChangeDetectorRef,
  ) {
    for (const app of this.appRegistry.getApps()) {
      this.injectors.set(app.path, Injector.create({
        parent: this.injector,
        providers: [{ provide: TRANSLOCO_SCOPE, useValue: app.name }],
      }));
      app.loadComponent().then(componentClass => {
        this.componentClasses.set(app.path, componentClass);
        this.changeDetectorRef.markForCheck();
      });
    }
  }

  public get previews(): TabPreview[] {
    return this.navigationService.openedApps()
      .slice()
      .reverse()
      .flatMap(url => {
        const app = this.appRegistry.findByUrl(url);
        return app ? [{ ...app, url }] : [];
      });
  }

  public componentFor(preview: TabPreview): Type<unknown> | null {
    return this.componentClasses.get(preview.path) ?? null;
  }

  public injectorFor(preview: TabPreview): Injector | undefined {
    return this.injectors.get(preview.path);
  }

  public open(url: string): void {
    this.navigationService.closeTabs();
    this.router.navigateByUrl(url);
  }

  public clearAll(): void {
    this.navigationService.closeAllApps();
  }
}
