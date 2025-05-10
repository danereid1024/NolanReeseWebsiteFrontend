import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  // {
  //   path: 'album/:albumId',
  //   renderMode: RenderMode.Prerender,
  //   async getPrerenderParams() {
  //     const ids = this.params.albumId;
  //     return ids.map(albumId => ({albumId})
  //   },
  // }
];
