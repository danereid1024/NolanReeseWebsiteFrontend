import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowEpSingleComponent } from './show-ep-single.component';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting, HttpTestingController} from '@angular/common/http/testing';
import { provideRouter} from '@angular/router';

describe('ShowEpSingleComponent', () => {
  let component: ShowEpSingleComponent;
  let fixture: ComponentFixture<ShowEpSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowEpSingleComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEpSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
