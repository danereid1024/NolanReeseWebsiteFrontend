import { Component, ElementRef, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { AlbumInfo } from '../../interfaces/album-info';
import { AlbumsComponent } from '../../components/albums/albums.component';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-music',
  imports: [AlbumsComponent],
  template: ` <app-albums></app-albums> `,
  styles: ``,
})
export class MusicComponent {
  musicFilteredList: AlbumInfo[] = [];
  musicList: AlbumInfo[] = [];
  albumService = inject(AlbumsService);

  constructor(private elementRef: ElementRef) {
    this.albumService.getAllAlbums().subscribe((albums) => {
      this.musicFilteredList = albums;
      this.musicList = this.musicFilteredList;
    });
  }
}
