import { Injectable } from '@angular/core'
import { Location } from '@angular/common'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private history: string[] = []
  private apps = new Set<string>();

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.urlAfterRedirects === '/') {
          this.history = [];
        } else {
          this.history.push(event.urlAfterRedirects);
          this.apps.add(event.urlAfterRedirects)
        }
      }
    })
  }

  back(url = '/'): void {
    this.history.pop()
    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl(url)
    }
  }

  home(): void {
    this.router.navigate(['/']);
    this.history = [];
  }

  openedApps(): Set<string> {
    return this.apps;
  }
}