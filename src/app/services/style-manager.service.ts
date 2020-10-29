import { Injectable } from '@angular/core';

/**
 * @description
 *
 * Represents a service for *-theme.css files management.
 */


@Injectable({
  providedIn: 'root'
})
export class StyleManagerService {

  /**
   * Set the stylesheet with the specified key.
   */
  setStyle(key: string, href: string): void{
    this.getLinkElementForKey(key).setAttribute('href', href);
  }

  /**
   * Remove the stylesheet with the specified key.
   */
  removeStyle(key: string): void{
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }

// tslint:disable-next-line:typedef
  getLinkElementForKey(key: string) {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }
// tslint:disable-next-line:typedef
  getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(`link[rel="stylesheet"].${this.getClassNameForKey(key)}`);
  }
// tslint:disable-next-line:typedef
  createLinkElementWithKey(key: string) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }
// tslint:disable-next-line:typedef
  getClassNameForKey(key: string) {
    return `style-manager-${key}`;
  }
}
