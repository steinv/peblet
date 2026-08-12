import { Injectable, Type } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faBriefcase, faFolderOpen, faGear } from '@fortawesome/free-solid-svg-icons';

export interface AppDefinition {
  path: string;
  /** Also doubles as the TRANSLOCO_SCOPE used by the app's own feature module. */
  name: string;
  icon: IconProp;
  bgColor: string;
  loadComponent: () => Promise<Type<unknown>>;
}

@Injectable({ providedIn: 'root' })
export class AppRegistryService {

  private readonly apps: AppDefinition[] = [
    {
      path: '/portfolio',
      name: 'portfolio',
      icon: faFolderOpen,
      bgColor: '#2481ce',
      loadComponent: () => import('./portfolio/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    },
    {
      path: '/experience',
      name: 'experience',
      icon: faBriefcase,
      bgColor: '#154c79',
      loadComponent: () => import('./experience/experience/experience.component').then(m => m.ExperienceComponent),
    },
    {
      path: '/contact',
      name: 'contact',
      icon: faAddressCard,
      bgColor: '#0b2d39',
      loadComponent: () => import('./contact/contact/contact.component').then(m => m.ContactComponent),
    },
    {
      path: '/settings',
      name: 'settings',
      icon: faGear,
      bgColor: '#abb',
      loadComponent: () => import('./settings/settings/settings.component').then(m => m.SettingsComponent),
    },
  ];

  getApps(): AppDefinition[] {
    return this.apps;
  }

  findByUrl(url: string): AppDefinition | undefined {
    const firstSegment = '/' + url.split('/')[1];
    return this.apps.find(app => app.path === firstSegment);
  }
}
