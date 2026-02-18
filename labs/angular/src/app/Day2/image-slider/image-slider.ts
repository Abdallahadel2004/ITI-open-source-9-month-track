import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './image-slider.html'
})
export class ImageSlider {
  images = [
    'https://picsum.photos/id/10/600/400',
    'https://picsum.photos/id/20/600/400',
    'https://picsum.photos/id/30/600/400',
    'https://picsum.photos/id/40/600/400',
    'https://picsum.photos/id/50/600/400',
  ];

  intervalId: number | null = null;
  currentIndex = 0;

  get currentImage() {
    return this.images[this.currentIndex];
  }

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }

  slide() {
    this.stop();
    this.intervalId = setInterval(() => {
      this.next();
    }, 2000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

 
}
