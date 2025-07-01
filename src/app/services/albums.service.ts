import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'nolanreesewebsitebackend-awcugbb7befxdvdq.westus2-01.azurewebsites.net/api/album'; 
  private apiUrl2 = 'nolanreesewebsitebackend-awcugbb7befxdvdq.westus2-01.azurewebsites.net/api/singles-ep'; 

  constructor(private http: HttpClient) { }

  getAllAlbums() {
    return this.http.get<any[]>(this.apiUrl);
  }
  getAllEPsSingles() {
    return this.http.get<any[]>(this.apiUrl2);
  }

}
