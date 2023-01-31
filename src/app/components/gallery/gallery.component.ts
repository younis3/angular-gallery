import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  template: `
    <div class="page">
      <div class="galleryContainer">
        <div class="bigPic">
          <div class="arrowL" (click)="prevPic()"><</div>
          <img
            (click)="openPic(photos[activeThumb])"
            [src]="photos[activeThumb]"
          />
          <div class="arrowR" (click)="nextPic()">></div>
        </div>
        <div class="thumbs">
          <div
            *ngFor="let photo of photos; index as i"
            [ngClass]="thumbClass(i)"
          >
            <img
              [src]="photo"
              (click)="choosePic(i)"
              (dblclick)="openPic(photo)"
            />
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  photos: string[];
  activeThumb: number;
  constructor(private router: Router) {
    this.photos = [
      'assets/images/1.jpg',
      'assets/images/2.png',
      'assets/images/3.jpg',
      'assets/images/4.jpg',
      'assets/images/5.jpg',
      'assets/images/6.jpg',
    ];
    this.activeThumb = 0;
  }

  choosePic(index: number): void {
    this.activeThumb = index;
  }

  nextPic(): void {
    if (this.activeThumb < this.photos.length - 1) {
      this.activeThumb += 1;
    }
  }

  prevPic(): void {
    if (this.activeThumb > 0) {
      this.activeThumb -= 1;
    }
  }

  thumbClass(index: number): object {
    let isFocus: boolean = false;
    if (index == this.activeThumb) isFocus = true;
    return {
      thumbContainer: true,
      activeThumbFocus: isFocus,
    };
  }

  openPic(photo: string): void {
    this.router.navigate(['/photo', photo]);
  }
}
