import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


export interface Theme {
  name: string;
  displayName: string;
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
    displayName: 'Light theme',
    name: 'light-theme',
    isDark: false,
    isDefault: true,
  };

  themes: Theme[] = [
    {
      displayName: 'Orange theme',
      name: 'orange-theme',
      isDark: false,
    },
    {
      displayName: 'Dark theme',
      name: 'dark-theme',
      isDark: true,
    },
    ThemeService.defaultTheme
  ];

  private themeSUB = new BehaviorSubject(ThemeService.defaultTheme); // stores the current theme
  themeOBS = this.themeSUB.asObservable();

  constructor() {
  }

  updateTheme(theme: Theme): void {
    this.themeSUB.next(theme);
  }

  findTheme(themeName: string): Theme | undefined {
    return this.themes.find(currentTheme => currentTheme.name === themeName);
  }
}
