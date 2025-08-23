import { TestBed } from '@angular/core/testing';
import { AlbumsService } from './albums.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ALBUM } from '../mocks/albums';

describe('AlbumsService', () => {
  let service: AlbumsService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(AlbumsService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should get all albums from api", () => {
    service.getAllAlbums().subscribe((users: any) => {
      expect(users).toBeTruthy();
      expect(users.length).toBe(4);
      const secondUser = users.find((u: any) => u.id === 2);
      expect(secondUser.title).toBe('Album 3');
    });

    const mockRequest = httpTesting.expectOne('https://nolanreesewebsitebackend-awcugbb7befxdvdq.westus2-01.azurewebsites.net/api/album');
    expect(mockRequest.request.method).toEqual('GET');
    mockRequest.flush(Object.values(ALBUM));
  });
});
