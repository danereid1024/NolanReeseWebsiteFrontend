import { RenderMode, ServerRoute } from '@angular/ssr';
import { routesIDs } from './mocks/routes-id';
import { routesIDs2 } from './mocks/routes-id-2';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'album/:albumId',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const ids = routesIDs;
      return ids.map(id => ({id}))
    },
  },
  {
    path: 'singles-ep/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const ids = routesIDs2;
      return ids.map(id => ({id}))
    }
  }
];
