import { Component, OnInit } from '@angular/core';
import {SiteTheme, ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  theme: SiteTheme = ThemeService.defaultTheme;

  constructor(themeService: ThemeService) {
    themeService.theme$.subscribe(theme => { this.theme = theme; });
  }

  ngOnInit(): void {
  }

}
