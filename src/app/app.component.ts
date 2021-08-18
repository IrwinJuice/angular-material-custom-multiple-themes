import {Component} from '@angular/core';
import {Theme, ThemeService} from './shared/theme.service';
import {StyleService} from './shared/style.service';
import {LocalStorageService} from './shared/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  themes: Theme[];
  selectedTheme: Theme;

  constructor( public styleService: StyleService,
               private themeService: ThemeService,
               private localStorage: LocalStorageService) {
    this.themes = themeService.themes;

    const themeName = this.localStorage.getValue(LocalStorageService.themeKey);

    if (themeName) {
      this.selectedTheme = this.selectTheme(themeName);
    }
    else { // if the localstorage is empty  set the default light theme
      this.selectedTheme = this.selectTheme(ThemeService.defaultTheme.name);
    }
  }

  selectTheme(themeName: string): Theme {

    const theme = this.themeService.findTheme(themeName);

    if (theme) {
      this.themeService.updateTheme(theme);
      this.styleService.removeStyle('theme');
      this.styleService.setStyle('theme', `${theme.name}.css`);
      this.localStorage.store(LocalStorageService.themeKey, theme.name);
      return theme;

    }

    return ThemeService.defaultTheme;

  }
}
