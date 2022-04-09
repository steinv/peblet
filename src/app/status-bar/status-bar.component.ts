import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { map, Observable, shareReplay, Subject, takeUntil, tap, timer } from 'rxjs';

import { faWifi, faBatteryHalf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'peblet-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusBarComponent implements OnDestroy {

  private destroy$ = new Subject<void>();
  public time$: Observable<Date>;
  public faWifi = faWifi;
  public faBatteryHalf = faBatteryHalf;

  constructor(readonly cdr: ChangeDetectorRef) { 
    this.time$ = timer(0, 1000).pipe(
      map(() => new Date()),
      tap(() => cdr.markForCheck()),
      takeUntil(this.destroy$),
      shareReplay(1)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
