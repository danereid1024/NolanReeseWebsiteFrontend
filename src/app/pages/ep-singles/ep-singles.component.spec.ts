import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpSinglesComponent } from './ep-singles.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('EpSinglesComponent', () => {
  let component: EpSinglesComponent;
  let fixture: ComponentFixture<EpSinglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpSinglesComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpSinglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
