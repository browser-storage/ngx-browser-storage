import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserStorageOptions } from '@browser-storage/typings';
import { BROWSER_STORAGE_CONFIG } from './ngx-browser-storage.tokens';

@NgModule({})
export class NgxBrowserStorageModule {
  public static forRoot(config: BrowserStorageOptions): ModuleWithProviders {
    return {
      ngModule: NgxBrowserStorageModule,
      providers: [
        {
          provide: BROWSER_STORAGE_CONFIG,
          useValue: config
        }
      ]
    };
  }
}
