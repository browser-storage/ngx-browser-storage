import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBrowserStorageModule, NgxBrowserStorageService } from '@browser-storage/ngx-browser-storage';
import { LocalstorageDriver } from '@browser-storage/localstorage-driver';
import { mergeMap, tap } from 'rxjs/operators';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxBrowserStorageModule.forRoot({
      version: 0,
      storeName: 'test',
      name: 'test',
      drivers: new LocalstorageDriver()
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(storage: NgxBrowserStorageService) {
    storage.setItem('a', 1).pipe(
      tap(console.log),
      mergeMap(() => storage.getItem('a')),
      tap(console.log)
    ).subscribe();
  }
}
