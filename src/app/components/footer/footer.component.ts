import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
      <ul>
        <li>Instagram <a href="https://www.instagram.com/nolan_reese/">Instagram</a></li>
        <li>X <a href="https://x.com/NolanLReese">X</a></li>
        <li>YouTube <a href="https://www.youtube.com/@nolanreese003">YouTube</a></li>
      </ul>
      <div class="container">
        <p class="text-muted">© 2018 Nolan Reese. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
