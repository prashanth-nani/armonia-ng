/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlbumService } from './album.service';

describe('AlbumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumService]
    });
  });

  it('should ...', inject([AlbumService], (service: AlbumService) => {
    expect(service).toBeTruthy();
  }));
});
