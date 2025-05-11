import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEpSingleComponent } from './show-ep-single.component';

describe('ShowEpSingleComponent', () => {
  let component: ShowEpSingleComponent;
  let fixture: ComponentFixture<ShowEpSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowEpSingleComponent]
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
