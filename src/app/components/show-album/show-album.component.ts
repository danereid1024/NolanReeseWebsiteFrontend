import { Component, Input, OnInit } from '@angular/core';
import { AlbumInfo } from '../../interfaces/album-info';
import { AlbumsService } from '../../services/albums.service';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-show-album',
  imports: [NgFor, NgIf, RouterModule],
  template: `
<br>
<br>
<br>
<br>
<br>
<br>
<div *ngIf="albums.length; else noAlbums">
  <div *ngFor="let album of albums.slice().reverse()">
    <a [routerLink]="['/album', album.id ]"><img class="album-img" [src]="album.coverImageUrl" [alt]="album.title + ' cover art'"></a>
  </div>
</div>

<ng-template #noAlbums>
  <p>No albums to display.</p>
</ng-template>
  `,
  styles: `
  .album-img {
    width: 500px;
    height: 500px;
  }
  `,
})
export class ShowAlbumComponent implements OnInit {
  albums: AlbumInfo[] = [];
  @Input() album!: AlbumInfo;

  constructor(private albumService: AlbumsService) {

  }
  ngOnInit(): void {
    // this.albumService.getAllAlbums().subscribe({
    //   next: (data) => {
    //     console.log('Albums received:', data);
    //     this.albums = data;
    //   },
    //   error: (err) => console.error('Error fetching albums:', err),
    // });
  }
}
