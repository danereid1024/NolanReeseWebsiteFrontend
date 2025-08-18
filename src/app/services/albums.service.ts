import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private apiUrl = 'https://nolan-reese-website-backend.vercel.app/api/album';
  private apiUrl2 ='https://nolan-reese-website-backend.vercel.app/api/singles-ep';

  constructor(private http: HttpClient) {}

  getAllAlbums() {
    return this.http.get<any[]>(this.apiUrl);
  }
  getAllEPsSingles() {
    return this.http.get<any[]>(this.apiUrl2);
  }
}
