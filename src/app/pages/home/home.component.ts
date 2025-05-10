import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  template: `
<video class="fullscreen-video" autoplay muted loop playsinline>
  <source src="assets/videos/background.mp4" type="video/mp4" />
</video>

<main>
  <!-- Hero Section -->
  <section class="section hero-section">
    <div class="abstract-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
    <div class="content-wrapper">
      <div class="hero-content">
        <div class="hero-text-container">
          <div class="title-wrapper">
            <h1 class="hero-title">
              <span class="title-line">NOLAN</span>
              <span class="title-line">REESE</span>
            </h1>
            <div class="title-decoration"></div>
          </div>
          <p class="hero-subtitle">
            <span class="subtitle-word">TELLING</span>
            <span class="subtitle-word">STORIES</span>
            <span class="subtitle-word">THROUGH</span>
            <span class="subtitle-word">SOUND</span>
          </p>
          <div class="hero-cta">
            <a href="#works" class="cta-button">
              <span class="button-text">Explore Works</span>
              <span class="button-arrow">→</span>
            </a>
            <a routerLink="/contact" routerLinkActive="active" class="cta-button secondary">
              <span class="button-text">Get in Touch</span>
              <span class="button-arrow">→</span>
            </a>
          </div>
        </div>
        <div class="hero-image-container">
          <div class="image-frame">
            <img
              src="/assets/images/nolanReese2.jpg"
              alt="Nolan Reese"
              class="hero-image"
            />
            <div class="image-overlay"></div>
          </div>
          <div class="floating-elements">
            <div class="floating-element element-1">Sound</div>
            <div class="floating-element element-2">Music</div>
            <div class="floating-element element-3">Art</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Video Showcase Section -->
  <section id="works" class="section works-section">
    <div class="content-wrapper">
      <h2 class="section-title">Featured Works</h2>
      <div class="works-container">
        <div class="work-item">
          <div class="work-video">
            <video autoplay muted loop playsinline>
              <source src="assets/videos/performance.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="work-content">
            <h3>All Things End...</h3>
            <p>
              An immersive musical experience that transcends boundaries,
              showcasing Nolan's unique ability to connect with audiences
              through sound and movement.
            </p>
            <div class="work-meta">
              <span><i class="fas fa-music"></i> All Things End...</span>
              <span><i class="fas fa-clock"></i> 30:01</span>
            </div>
            <div class="work-stats">
              <span>400 views</span>
              <span>11 months ago</span>
            </div>
            <a
              href="https://linktr.ee/nolanreese"
              class="work-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check out more of my music in the link below
            </a>
            <span class="release-date"
              >"From The Shadows" Available June 1st</span
            >
          </div>
        </div>

        <div class="work-item">
          <div class="work-video">
            <video autoplay muted loop playsinline>
              <source src="assets/videos/release.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="work-content">
            <h3>All Things Forgotten...</h3>
            <p>
              Experience the newest chapter in Nolan's sonic journey, where
              innovative sound design meets emotional storytelling.
            </p>
            <div class="work-meta">
              <span><i class="fas fa-music"></i> All Things Forgotten...</span>
              <span><i class="fas fa-clock"></i> 30:31</span>
            </div>
            <div class="work-stats">
              <span>166 views</span>
              <span>11 months ago</span>
            </div>
            <a
              href="https://www.youtube.com/watch?v=Y5Epdzh8k5s"
              class="work-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="section about-section">
    <div class="about-content">
      <div class="about-text">
        <h2>About</h2>
        <p>
          Nolan Reese is a dynamic artist whose work transcends traditional
          boundaries. Through a unique blend of music and performance, Nolan
          creates immersive experiences that resonate with audiences on a
          profound level.
        </p>
        <div class="about-stats">
          <div class="stat-item">
            <div class="stat-number">Music Composer</div>
            <div class="stat-label">Creating immersive soundscapes</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">Producer</div>
            <div class="stat-label">Crafting unique sonic experiences</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">Song Writer</div>
            <div class="stat-label">Telling stories through music</div>
          </div>
        </div>
      </div>
      <div class="about-image">
        <img
          src="assets/images/about-image.jpeg"
          alt="Nolan Reese performing"
        />
      </div>
    </div>
  </section>
</main>
  `,
  styles: ``,
})
export class HomeComponent {
  isDarkMode = false;
  title = 'NolanReeseWebsite';
  private isBrowser: boolean;
  isMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDarkMode = savedTheme === 'dark';
        this.applyTheme();
      } else {
        // Check system preference
        this.isDarkMode = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        this.applyTheme();
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768) {
      this.isMenuOpen = false;
    }
  }

  toggleTheme() {
    if (this.isBrowser) {
      this.isDarkMode = !this.isDarkMode;
      this.applyTheme();
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  private applyTheme() {
    if (this.isBrowser) {
      document.documentElement.setAttribute(
        'data-theme',
        this.isDarkMode ? 'dark' : 'light'
      );
    }
  }
}
