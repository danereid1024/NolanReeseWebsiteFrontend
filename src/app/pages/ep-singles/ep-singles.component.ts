import { Component, ElementRef, inject } from '@angular/core';
import { SingleEpInfo } from '../../interfaces/single-ep-info';
import { AlbumsService } from '../../services/albums.service';
import { ShowEpSingleComponent } from '../../components/show-ep-single/show-ep-single.component';

@Component({
  selector: 'app-ep-singles',
  imports: [ShowEpSingleComponent],
  template: `
  <app-show-ep-single></app-show-ep-single>
  `,
  styles: ``
})
export class EpSinglesComponent {
  musicFilteredList: SingleEpInfo[] = [];
  musicList: SingleEpInfo[] = [];
  albumService = inject(AlbumsService);

  // constructor(private elementRef: ElementRef) {
  //   this.albumService.getAllEPsSingles().subscribe((singlesEP) => {
  //     this.musicFilteredList = singlesEP;
  //     this.musicList = this.musicFilteredList;
  //   });
  // }
}
