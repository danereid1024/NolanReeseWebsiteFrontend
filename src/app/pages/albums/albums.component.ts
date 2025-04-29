import { Component, inject } from '@angular/core';
import { AlbumInfo } from '../../interfaces/album-info';
import { TrackInfo } from '../../interfaces/track-info';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-albums',
  imports: [],
  template: `<h1>Album {{albums?.albumTitle}}</h1>


<iframe style="border-radius:12px" [src]="'https://open.spotify.com/embed/track/' + trackId + '?utm_source=generator'" width="100%" height="352" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

    `,
  styles:``
})
export class AlbumsComponent {

albums: AlbumInfo | undefined;
tracks: TrackInfo | undefined;
trackList: TrackInfo[] | undefined;
route: ActivatedRoute = inject(ActivatedRoute);
albumsService = inject(AlbumsService);
trackId: string | undefined;

constructor() {
}
}
