import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  static themeKey = 'theme-current-name';
  static langKey = 'current-lang';


  store(key: string, value: string): void {
    localStorage[key] = value;
  }

  getValue(key: string): string | null {
    return localStorage[key] || null;
  }

  clearStorage(key: string): void {
    localStorage.removeItem(key);
  }
}
