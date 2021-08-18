import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


export interface Theme {
  name: string;
  displayName?: string;
  accent?: string;
  primary?: string;
  isDark?: boolean;
  isDefault?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  static defaultTheme: Theme =   {
    primary: '#eceff1',
    accent: '#26a69a',
    displayName: 'Light theme',
    name: 'light-theme',
    isDark: false,
    isDefault: true,
  };

  themes: Theme[] = [
    {
      primary: '#eceff1',
      accent: '#26a69a',
      displayName: 'Orange theme',
      name: 'orange-theme',
      isDark: false,
      isDefault: true,
    },
    {
      primary: '#263238',
      accent: '#26a69a',
      displayName: 'Dark theme',
      name: 'dark-theme',
      isDark: true,
    },
    ThemeService.defaultTheme
  ];

  private themeSubject$ = new BehaviorSubject(ThemeService.defaultTheme);
  theme$ = this.themeSubject$.asObservable();

  constructor() {
  }

  updateTheme(theme: Theme): void {
    this.themeSubject$.next(theme);
  }

  findTheme(themeName: string): Theme | undefined {
    return this.themes.find(currentTheme => currentTheme.name === themeName);
  }
}
