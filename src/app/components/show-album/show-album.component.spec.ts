import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlbumComponent } from './show-album.component';
import {HttpClient} from '@angular/common/http';
import {provideHttpClient} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';

describe('ShowAlbumComponent', () => {
  let component: ShowAlbumComponent;
  let fixture: ComponentFixture<ShowAlbumComponent>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAlbumComponent,HttpClient, HttpTestingController],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    httpTesting = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(ShowAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
