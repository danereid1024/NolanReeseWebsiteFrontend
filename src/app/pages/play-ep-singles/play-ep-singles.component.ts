import { Component, inject } from '@angular/core';
import { SingleEpInfo } from '../../interfaces/single-ep-info';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-play-ep-singles',
  imports: [NgIf],
  template: `
<br>
<br>
<br>
<br>
<br>
<br>
    <div *ngIf="singleEP">
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
  styles: ``
})
export class PlayEpSinglesComponent {
  singleEP: SingleEpInfo | undefined;
  embedSrc: SafeResourceUrl | undefined;

  private route = inject(ActivatedRoute);
  private albumsService = inject(AlbumsService);
  private sanitizer = inject(DomSanitizer);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // this.albumsService.getAllEPsSingles().subscribe(singleEP => {
    //   this.singleEP = singleEP.find(a => a.id === id);

    //   if (this.singleEP?.spotifyId) {
    //     const embedUrl = `https://open.spotify.com/embed/album/${this.singleEP.spotifyId}?utm_source=generator&theme=0`;
    //     this.embedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    //   }
    // });
  }
}
