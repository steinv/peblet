import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'peblet-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {

  languageForm = new FormGroup({
    language: new FormControl(this.translocoService.getActiveLang(), Validators.required)
  });

  constructor(
    private readonly translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    this.languageForm.get('language')?.valueChanges.subscribe(
      (language) => { if (!!language) this.translocoService.setActiveLang(language)}
    );
  }

}
