import { Injectable } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAddressCard, faBriefcase, faFolderOpen, faGear } from '@fortawesome/free-solid-svg-icons';

export interface AppDefinition {
  path: string;
  name: string;
  icon: IconProp;
  bgColor: string;
}

@Injectable({ providedIn: 'root' })
export class AppRegistryService {

  private readonly apps: AppDefinition[] = [
    { path: '/portfolio', name: 'portfolio', icon: faFolderOpen, bgColor: '#2481ce' },
    { path: '/experience', name: 'experience', icon: faBriefcase, bgColor: '#154c79' },
    { path: '/contact', name: 'contact', icon: faAddressCard, bgColor: '#0b2d39' },
    { path: '/settings', name: 'settings', icon: faGear, bgColor: '#abb' },
  ];

  getApps(): AppDefinition[] {
    return this.apps;
  }

  findByUrl(url: string): AppDefinition | undefined {
    const firstSegment = '/' + url.split('/')[1];
    return this.apps.find(app => app.path === firstSegment);
  }
}
