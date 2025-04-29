import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumInfo } from '../interfaces/album-info';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'http://localhost:3000/api/albums'; 

  constructor(private http: HttpClient) { }

  getAllAlbums() {
    return this.http.get<any[]>(this.apiUrl);
  }


}
