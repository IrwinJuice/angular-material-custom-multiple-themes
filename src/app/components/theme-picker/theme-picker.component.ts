import { Component, OnInit } from '@angular/core';
import {StyleManagerService} from '../../services/style-manager.service';
import {SiteTheme, ThemeService} from '../../services/theme.service';
import {LocalStorageService} from '../../services/localstorage.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  checked = false;
  currentTheme: SiteTheme = ThemeService.defaultTheme;

  constructor( public styleService: StyleManagerService,
               private themeService: ThemeService,
               private localStorage: LocalStorageService) {

    const themeName = this.localStorage.getValue(LocalStorageService.themeKey);

    if (themeName) {
      this.selectTheme(themeName);
      this.checked = themeName === 'dark-theme';
    }
    else { // if the localstorage is empty  set the default light theme
      this.selectTheme(ThemeService.defaultTheme.name);
      this.checked = false;
    }

  }

  ngOnInit(): void {
  }


  selectTheme(themeName: string): void {

    const theme = this.themeService.findTheme(themeName);

    if (!theme) { // if theme doesn't exist in theme array
      return;
    }
    this.themeService.updateTheme(theme);
    this.currentTheme = theme;

    this.styleService.removeStyle('theme');
    this.styleService.setStyle('theme', `themes/${theme.name}.css`); // link to your theme.css file after build

    if (this.currentTheme) {
      this.localStorage.store(LocalStorageService.themeKey, this.currentTheme.name);
    }
  }
}
