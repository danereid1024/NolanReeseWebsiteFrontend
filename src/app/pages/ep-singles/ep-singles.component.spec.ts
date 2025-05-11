import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpSinglesComponent } from './ep-singles.component';

describe('EpSinglesComponent', () => {
  let component: EpSinglesComponent;
  let fixture: ComponentFixture<EpSinglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpSinglesComponent]
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
