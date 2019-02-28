import { Inject, Injectable } from '@angular/core';
import { defer, Observable } from 'rxjs';
import { BrowserStorage } from '@browser-storage/core';
import { BrowserStorageOptions } from '@browser-storage/typings';
import { BROWSER_STORAGE_CONFIG } from './ngx-browser-storage.tokens';

@Injectable({
  providedIn: 'root'
})
export class NgxBrowserStorageService {
  private storage: BrowserStorage;

  constructor(@Inject(BROWSER_STORAGE_CONFIG) private storageConfig: BrowserStorageOptions) {
    this.storage = new BrowserStorage(storageConfig);
  }

  public clear(): Observable<void> {
    return defer<void>(() => this.storage.clear());
  }

  public destroy(): Observable<void> {
    return defer<void>(() => this.storage.destroy());
  }

  public getItem<T>(key: string): Observable<T> {
    return defer<T>(() => this.storage.getItem<T>(key));
  }

  public hasItem(key: string): Observable<boolean> {
    return defer<boolean>(() => this.storage.hasItem(key));
  }

  public iterate<T>(iterator: (key: string, value: T, index: number) => any): Observable<void> {
    return defer<void>(() => this.storage.iterate<T>(iterator));
  }

  public key(index: number): Observable<string> {
    return defer(() => this.storage.key(index));
  }

  public keys(): Observable<string[]> {
    return defer(() => this.storage.keys());
  }

  public length(): Observable<number> {
    return defer(() => this.storage.length());
  }

  public ready(): Observable<boolean> {
    return defer(() => this.storage.ready());
  }

  public removeItem(key: string): Observable<void> {
    return defer(() => this.storage.removeItem(key));
  }

  public setItem<T>(key: string, item: T): Observable<T> {
    return defer<T>(() => this.storage.setItem<T>(key, item));
  }
}
