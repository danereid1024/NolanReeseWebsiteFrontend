import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicComponent } from './pages/music/music.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AlbumsComponent } from './pages/albums/albums.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'music',
        component: MusicComponent,
        title: 'Music Page',
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact Page',
    },
    {
        path: 'album/:albumId',
        component: AlbumsComponent,
        title: 'Album Page',
    }
    
];
