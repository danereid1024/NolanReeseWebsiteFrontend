import { Component, inject } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlbumsService } from '../../services/albums.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="sendMessageForm">
      <label for="name">Name</label>
      <input type="text" id="name" formControlName="name">
      <label for="email">Email</label>
      <input type="email" id="email" formControlName="email">
      <label for="message">Message</label>
      <textarea id="message" formControlName="message"></textarea>
      <button type="submit" (click)="sendMessage()">Send</button>
    </form>
  `,
  styles: ``
})
export class ContactComponent {

  sendMessageForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.sendMessageForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  successMessage = '';
  errorMessage = '';

  sendMessage() {
    if (this.sendMessageForm.invalid) return;

    this.contactService.sendMessage(this.sendMessageForm.value).subscribe({
      next: () => {
        this.successMessage = 'Message sent!';
        this.errorMessage = '';
        this.sendMessageForm.reset();
      },
      error: (error) => {
        this.errorMessage = 'Failed to send message.';
        this.successMessage = '';
        console.error(error);
      }
    });
  }
  }