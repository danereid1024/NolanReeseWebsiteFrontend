import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleEpInfo } from '../../interfaces/single-ep-info';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-show-ep-single',
  imports: [NgFor, NgIf, RouterModule],
  template: `
<br>
<br>
<br>
<br>
<br>
<br>
<div *ngIf="singlesEP.length; else noAlbums">
  <div *ngFor="let singlesEP of singlesEP.slice().reverse()">
    <a [routerLink]="['/singles-ep', singlesEP.id ]"><img class="album-img" [src]="singlesEP.coverImageUrl" [alt]="singlesEP.title + ' cover art'"></a>
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
export class ShowEpSingleComponent {
  singlesEP: SingleEpInfo[] = [];
  @Input() singleEP!: SingleEpInfo;

  constructor(private albumService: AlbumsService) {

  }
  ngOnInit(): void {
    // this.albumService.getAllEPsSingles().subscribe({
    //   next: (data) => {
    //     console.log('Albums received:', data);
    //     this.singlesEP = data;
    //   },
    //   error: (err) => console.error('Error fetching albums:', err),
    // });
  }
}
