import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  static readonly themeKey = 'theme-current-name';


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
