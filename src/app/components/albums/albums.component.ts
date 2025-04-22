import { Component, Input, OnInit } from '@angular/core';
import { AlbumInfo } from '../../interfaces/album-info';
import { AlbumsService } from '../../services/albums.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-albums',
  imports: [NgFor, NgIf],
  template: `
<div *ngIf="albums.length">
  <div *ngFor="let album of albums">
    <h3>{{ album.albumTitle }}</h3>
    <img class="album-img" [src]="album.coverImageUrl" alt="">

  </div>
</div>


  `,
  styles: `
  .album-img {
    width: 500px;
    height: 500px;
  }
  `
})
export class AlbumsComponent implements OnInit {

  albums: AlbumInfo[] = []

  constructor(private albumService: AlbumsService) {

  }
  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe({
      next: (data) => {
        console.log('Albums received:', data);
        this.albums = data;
      },
      error: (err) => console.error('Error fetching albums:', err)
    });
  }
}
