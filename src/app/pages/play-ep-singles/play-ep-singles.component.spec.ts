import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayEpSinglesComponent } from './play-ep-singles.component';

describe('PlayEpSinglesComponent', () => {
  let component: PlayEpSinglesComponent;
  let fixture: ComponentFixture<PlayEpSinglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayEpSinglesComponent]
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
