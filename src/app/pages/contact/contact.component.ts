import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="sendMessageForm" (submit)="sendMessage()">
      <label for="name">Name</label>
      <input type="text" id="name" formControlName="name">
      <label for="email">Email</label>
      <input type="email" id="email" formControlName="email">
      <label for="message">Message</label>
      <textarea id="message" formControlName="message"></textarea>
      <button type="submit" [disabled]="sendMessageForm.invalid">Send</button>
    </form>
  `,
  styles: ``
})
export class ContactComponent {

  albumsService = inject(AlbumsService);

  sendMessageForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl('')
  });

  sendMessage() {
    this.albumsService.sendMessage(
      this.sendMessageForm.value.name ?? '',
      this.sendMessageForm.value.email ?? '',
      this.sendMessageForm.value.message ?? ''
    );
  }

}
