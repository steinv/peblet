import { Injectable } from '@angular/core'
import { Location } from '@angular/common'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { BehaviorSubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private history: string[] = []
  private apps = new Array<string>();
  private readonly tabsOpenSubject = new BehaviorSubject<boolean>(false);

  readonly tabsOpen$ = this.tabsOpenSubject.asObservable();

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.urlAfterRedirects === '/') {
          this.history = [];
        } else {
          this.pushApp(event.urlAfterRedirects);
        }
      }
    })
  }

  back(url = '/'): void {
    if (this.tabsOpenSubject.value) {
      this.closeTabs();
      return;
    }
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl(url)
    }
  }

  home(): void {
    if (this.tabsOpenSubject.value) {
      this.closeTabs();
      return;
    }
    this.router.navigate(['/']);
    this.history = [];
  }

  openedApps(): Array<string> {
    return this.apps;
  }

  closeAllApps(): void {
    this.apps = [];
    this.closeTabs();
  }

  toggleTabs(): void {
    this.tabsOpenSubject.next(!this.tabsOpenSubject.value);
  }

  closeTabs(): void {
    this.tabsOpenSubject.next(false);
  }

  private pushApp(urlAfterRedirects: string): void {
    this.history.push(urlAfterRedirects);
    
    const firstPart = '/' + urlAfterRedirects.split('/')[1];
    this.apps = this.apps.filter(a => !a.startsWith(firstPart));
    this.apps.push(urlAfterRedirects);
  }
}