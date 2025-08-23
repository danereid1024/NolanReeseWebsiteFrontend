import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayEpSinglesComponent } from './play-ep-singles.component';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import { provideRouter} from '@angular/router';

describe('PlayEpSinglesComponent', () => {
  let component: PlayEpSinglesComponent;
  let fixture: ComponentFixture<PlayEpSinglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayEpSinglesComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayEpSinglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
