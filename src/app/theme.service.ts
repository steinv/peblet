import { DOCUMENT } from '@angular/common';
import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';

const CLASS_DARK = 'dark';
const LOCAL_STORAGE_KEY_THEME = 'peblet_theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initTheme();
  }

  private initTheme(): void {
    const darkThemeChosen = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_THEME) || `{"dark": ${window.matchMedia('(prefers-color-scheme: dark)').matches}}`).dark;
    if (darkThemeChosen) {
      this.setDarkMode();
    }
  }

  private setDarkMode(): void {
    this.renderer.addClass(this.document.documentElement, CLASS_DARK);
  }

  private setLightMode(): void {
    this.renderer.removeClass(this.document.documentElement, CLASS_DARK);
  }

  public toggleDarkMode(): boolean {
    this.isDarkMode ? this.setLightMode() : this.setDarkMode();
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, JSON.stringify({dark: this.isDarkMode}));
    return this.isDarkMode;
  }

  public get isDarkMode(): boolean {
    return this.document.documentElement.classList.contains(CLASS_DARK);
  }
}
