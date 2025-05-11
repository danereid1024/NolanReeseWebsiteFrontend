import { Component, inject } from '@angular/core';
import { AlbumInfo } from '../../interfaces/album-info';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-play-album',
  template: `
    <br>
<br>
<br>
<br>
<br>
<br>
    <div *ngIf="album">
      <iframe 
        width="100%" 
        height="380" 
        [src]="embedSrc" 
        frameborder="0" 
        allowtransparency="true" 
        allow="encrypted-media">
      </iframe>
    </div>
  `,
  standalone: true,
  imports: [NgIf]
})
export class PlayAlbumComponent {
  album: AlbumInfo | undefined;
  embedSrc: SafeResourceUrl | undefined;

  private route = inject(ActivatedRoute);
  private albumsService = inject(AlbumsService);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumsService.getAllAlbums().subscribe(albums => {
      this.album = albums.find(a => a.id === id);

      if (this.album?.spotifyId) {
        const embedUrl = `https://open.spotify.com/embed/album/${this.album.spotifyId}?utm_source=generator&theme=0`;
        this.embedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      }
    });
  }
}
