import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  template: `
    <ul>
      <li>
        <a routerLink="/" class="action-button">Home</a>
      </li>
      <li>
        <a class="nav-link" routerLink="/music" routerLinkActive="active"
          >Music</a
        >
      </li>

      <li>
        <a class="nav-link" routerLink="/contact" routerLinkActive="active"
          >Contact</a
        >
      </li>
    </ul>
  `,
  styles: ``,
})
export class NavComponent {}
