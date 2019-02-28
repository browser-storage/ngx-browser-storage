import { TestBed } from '@angular/core/testing';

import { NgxBrowserStorageService } from './ngx-browser-storage.service';

describe('NgxBrowserStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBrowserStorageService = TestBed.get(NgxBrowserStorageService);
    expect(service).toBeTruthy();
  });
});
