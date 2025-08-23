import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://nolanreesewebsitebackend-awcugbb7befxdvdq.westus2-01.azurewebsites.net/api/contact';


  constructor(private http: HttpClient) {}

  sendMessage(contactData: any): Observable<any> {
    return this.http.post(this.apiUrl, contactData);
  }
}
