import { Component, ElementRef, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { AlbumInfo } from '../../interfaces/album-info';
import { ShowAlbumComponent } from '../../components/show-album/show-album.component';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  imports: [ShowAlbumComponent],
  template: ` <app-show-album></app-show-album> `,
  styles: ``,
})
export class AlbumsComponent {
  musicFilteredList: AlbumInfo[] = [];
  musicList: AlbumInfo[] = [];
  albumService = inject(AlbumsService);

  // constructor(private elementRef: ElementRef) {
  //   this.albumService.getAllAlbums().subscribe((albums) => {
  //     this.musicFilteredList = albums;
  //     this.musicList = this.musicFilteredList;
  //   });
  // }
}
