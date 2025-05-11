import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PlayAlbumComponent } from './pages/play-album/play-album.component';
import { ShowEpSingleComponent } from './components/show-ep-single/show-ep-single.component';
import { PlayEpSinglesComponent } from './pages/play-ep-singles/play-ep-singles.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page',
    },
    {
        path: 'music',
        component: AlbumsComponent,
        title: 'Music Page',
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact Page',
    },
    {
        path: 'album/:id',
        component: PlayAlbumComponent,
        title: 'Album Page',
    },
    {
        path: 'show-singles-ep',
        component: ShowEpSingleComponent,
        title: 'Show Singles and EPs Page',
    },
    {
        path: 'singles-ep/:id',
        component: PlayEpSinglesComponent,
        title: 'Singles and EPs Page',
    }
];
