import { Injectable } from '@angular/core'
import { Location } from '@angular/common'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'

@Injectable({ providedIn: 'root' })
export class NavigationService {
  private history: string[] = []
  private apps = new Array<string>();

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

  openedApps(): Array<string> {
    return this.apps;
  }

  private pushApp(urlAfterRedirects: string): void {
    this.history.push(urlAfterRedirects);
    this.apps = this.apps.filter(a => a != urlAfterRedirects);
    this.apps.push(urlAfterRedirects);
  }
}