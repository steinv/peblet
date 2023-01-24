import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { ThemeService } from 'src/app/theme.service';

const CLASS_DARK = 'dark';

@Component({
  selector: 'peblet-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent implements OnInit {

  public languageForm = new FormGroup({
    language: new FormControl(this.translocoService.getActiveLang(), Validators.required)
  });

  constructor(
    public readonly themeService: ThemeService,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2,
    private readonly translocoService: TranslocoService
  ) { }

  ngOnInit(): void {
    this.languageForm.get('language')?.valueChanges.subscribe(
      (language) => {
        if (!!language) {
          this.renderer.setAttribute(this.document.documentElement, 'lang', language);
          this.translocoService.setActiveLang(language)
        }
      });
  }

  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
}
