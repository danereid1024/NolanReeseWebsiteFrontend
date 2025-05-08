import { TrackInfo } from './track-info';

export interface AlbumInfo {
  albumId: number;
  spotifyId: string;
  albumTitle: string;
  artist: string;
  albumReleaseDate: string;
  albumGenre: string;
  coverImageUrl: string;
  trackList: TrackInfo[];
  year: string;
  streamingUrl: string;
}
