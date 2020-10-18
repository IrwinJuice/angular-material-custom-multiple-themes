import { Injectable } from '@angular/core';


/**
 * @description
 *
 * Represent a service for storing a user's data in the LocalStorage.
 */

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  static themeKey = 'theme-current-name';

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
