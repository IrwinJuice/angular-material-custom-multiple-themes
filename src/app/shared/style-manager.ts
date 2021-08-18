import { Injectable } from '@angular/core';

// Origin https://github.com/angular/material.angular.io/blob/2b98790d514e16c3318f7fb7058cf9f26b974371/src/app/shared/style-manager/style-manager.ts

@Injectable()
export class StyleManager {
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


  getLinkElementForKey(key: string): Element {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  getExistingLinkElementByKey(key: string): Element {
    return document.head.querySelector(`link[rel="stylesheet"].${this.getClassNameForKey(key)}`) as Element;
  }

  createLinkElementWithKey(key: string): Element {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  getClassNameForKey(key: string): string {
    return `style-manager-${key}`;
  }
}
