import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAlbumComponent } from './play-album.component';

describe('PlayAlbumComponent', () => {
  let component: PlayAlbumComponent;
  let fixture: ComponentFixture<PlayAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
describe('ngOnInit', () => {
  it('should get all albums from api', () => {

  })
})
