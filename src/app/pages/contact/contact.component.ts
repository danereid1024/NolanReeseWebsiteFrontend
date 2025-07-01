
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
    <!-- <form [formGroup]="sendMessageForm">
      <label for="name">Name</label>
      <input type="text" id="name" formControlName="name" />
      <label for="email">Email</label>
      <input type="email" id="email" formControlName="email" />
      <label for="message">Message</label>
      <textarea id="message" formControlName="message"></textarea>
      <button type="submit" (click)="sendMessage()">Send</button>
    </form> -->

    <!-- 
    This is a working contact form. To receive email, 
    Replace YOUR_ACCESS_KEY_HERE with your actual Access Key.

    Create Access Key here 👉 https://web3forms.com/
 -->

<section class="contact-section">
  <div class="contact-intro">
    <h2 class="contact-title">Get in Touch</h2>
    <p class="contact-description">
      Fill out the form below and we'll get back to you as soon as possible.
    </p>
  </div>

  <form [formGroup]="sendMessageForm">

    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
    <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
    <input type="hidden" name="from_name" value="My Website" />
    <!-- More custom ization options available in the docs: https://docs.web3forms.com -->

    <div class="form-group-container">
      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input id="name" formControlName="name"  name="name" class="form-input" placeholder="Your name" type="text" />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input id="email"  formControlName="email" name="email" class="form-input" placeholder="Your email" type="email" />
      </div>
      <div class="form-group">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-textarea" id="message" formControlName="message" name="message" placeholder="Your message" ></textarea>
      </div>
    </div>
    <!-- <button class="form-submit" type="submit" (click)="sendMessage()">Send Message</button> -->
  </form>

</section>
  `,
  styles: `
  .contact-section {
  width: 100%;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  padding: 3rem 1rem;
}

.contact-intro > * + * {
  margin-top: 1rem;
}

.contact-title {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
}

.contact-description {
  color: rgb(107 114 128);
}

.form-group-container {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.form-input::placeholder,
.form-textarea:focus-visible {
  color: #6b7280;
}

.form-input:focus-visible,
.form-textarea:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

.form-textarea {
  min-height: 120px;
}

.form-submit {
  width: 100%;
  margin-top: 1.2rem;
  background-color: #3124ca;
  color: #fff;
  padding: 13px 5px;
  border-radius: 0.375rem;
}

  `,
})
export class ContactComponent {
  sendMessageForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.sendMessageForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  successMessage = '';
  errorMessage = '';

  // sendMessage() {
  //   if (this.sendMessageForm.invalid) return;

  //   this.contactService.sendMessage(this.sendMessageForm.value).subscribe({
  //     next: () => {
  //       this.successMessage = 'Message sent!';
  //       this.errorMessage = '';
  //       this.sendMessageForm.reset();
  //     },
  //     error: (error) => {
  //       this.errorMessage = 'Failed to send message.';
  //       this.successMessage = '';
  //       console.error(error);
  //     },
  //   });
  // }
}
