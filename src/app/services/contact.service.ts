import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/api/contact'; 

  sendMessage(name: string, email: string, message: string) {
    const body = {
      name,
      email,
      message
    };
    return this.http.post('http://localhost:3000/api/contact', body);
  }
}
