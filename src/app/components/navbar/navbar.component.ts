import {Component} from '@angular/core';
import {Theme, ThemeService} from '../../shared/theme.service';
import {StyleManager} from '../../shared/style-manager';
import {LocalStorageService} from '../../shared/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  themes: Theme[];
  selectedTheme: Theme;

  constructor( public styleManager: StyleManager,
               private themeService: ThemeService,
               private localStorage: LocalStorageService) {

    this.themes = themeService.themes;

    const themeName = this.localStorage.getValue(LocalStorageService.themeKey);

    if (themeName) {
      this.selectedTheme = this.selectTheme(themeName);
    } else { // if the localstorage is empty  set the default light theme
      this.selectedTheme = this.selectTheme(ThemeService.defaultTheme.name);
    }
  }

  selectTheme(themeName: string): Theme {

    const theme = this.themeService.findTheme(themeName);

    if (theme) {
      this.themeService.updateTheme(theme);
      this.styleManager.removeStyle('theme');
      this.styleManager.setStyle('theme', `${theme.name}.css`);
      this.localStorage.store(LocalStorageService.themeKey, theme.name);

      return theme;
    }

    return ThemeService.defaultTheme;

  }

}
