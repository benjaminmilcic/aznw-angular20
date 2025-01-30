import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable, Subscription } from 'rxjs';

interface Bird {
  x: number;
  y: number;
  interval: any;
  move: any;
  direction: number;
  shot: boolean;
}

@Component({
  selector: 'app-moorhuhn',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './moorhuhn.component.html',
  styleUrl: './moorhuhn.component.css',
})
export class MoorhuhnComponent implements OnInit, OnDestroy {
  birds: Bird[] = [];
  newBirdSub: Subscription;
  ambientLoop = new Audio('/assets/ambientloop.ogg');
  playSound = true;
  tempPlaySound = this.playSound;
  score = 0;
  time = 60;
  timeInterval: any;
  gameover = false;
  @ViewChild('scoreDialog') scoreDialog: ElementRef<HTMLDialogElement>;
  showDialogContent = false;
  boardX: number;
  boardY: number;
  gameStarted = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sizeBoard();
  }

  ngOnInit(): void {
    this.sizeBoard();
    this.ambientLoop.loop = true;
  }

  sizeBoard() {
    if (window.innerWidth > 800) {
      this.boardX = 800;
    } else if (window.innerWidth > 520) {
      this.boardX = 500;
    } else {
      this.boardX = 300;
    }
    if (window.innerHeight > 840) {
      this.boardY = 600;
    } else if (window.innerHeight > 730) {
      this.boardY = 430;
    } else if (window.innerHeight > 630) {
      this.boardY = 330;
    } else if (window.innerHeight > 530) {
      this.boardY = 230;
    } else {
      this.boardY = 170;
    }
  }

  startGame(event: Event) {
    event.stopPropagation();
    this.gameStarted = true;
    this.playSound = this.tempPlaySound;
    if (this.playSound) {
      this.ambientLoop.play();
    }

    this.newBirdSub = this.getRandomTimerObservable().subscribe((value) => {
      this.birds.push({
        x: -77,
        y: this.getRandomInt(0, this.boardY - 49),
        move: () => {},
        interval: null,
        direction: this.getRandomInt(0, 1),
        shot: false,
      });
      let currentBird = this.birds[this.birds.length - 1];
      currentBird.move = () => {
        currentBird.interval = setInterval(() => {
          currentBird.x += 1;
          if (currentBird.x > this.boardX) {
            clearInterval(currentBird.interval);
            this.birds = this.birds.filter((item) => item !== currentBird);
          }
        }, this.getRandomInt(5, 20));
      };
      currentBird.move();
    });

    this.timeInterval = setInterval(() => {
      this.time -= 1;
      if (this.time === 0) {
        this.newBirdSub.unsubscribe();
        this.birds.forEach((bird) => clearInterval(bird.interval));
        clearInterval(this.timeInterval);
        this.birds = [];
        this.showScore();
      }
    }, 1000);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomTimerObservable(): Observable<number> {
    return new Observable<number>((observer) => {
      const emitValue = (count: number) => {
        observer.next(count);
        const randomDelay = this.getRandomInt(300, 2500);
        setTimeout(() => emitValue(count + 1), randomDelay);
      };
      emitValue(1);
    });
  }

  newGame(event: Event) {
    event.stopPropagation();
    this.gameStarted = false;
    this.time = 60;
    this.score = 0;
    this.gameover = false;
    this.scoreDialog.nativeElement.close();
    this.showDialogContent = false;
  }

  birdShot(bird: Bird) {
    bird.shot = true;
    setTimeout(() => {
      clearInterval(bird.interval);
      this.birds = this.birds.filter((item) => item !== bird);
      this.score += 10;
    }, 200);
  }

  toggleSound() {
    this.playSound = !this.playSound;
    if (this.playSound) {
      this.ambientLoop.play();
    } else {
      this.ambientLoop.pause();
    }
  }

  onShot() {
    if (this.playSound) {
      let shot = new Audio('/assets/moorhuhn-shot.ogg');
      shot.play();
    }
  }

  showScore() {
    this.gameover = true;
    this.ambientLoop.pause();
    this.tempPlaySound = this.playSound;
    this.playSound = false;
    setTimeout(() => {
      this.scoreDialog.nativeElement.showModal();
    }, 2500);
    setTimeout(() => {
      this.showDialogContent = true;
    }, 3500);
  }

  ngOnDestroy(): void {
    if (this.newBirdSub) {
      this.newBirdSub.unsubscribe();
    }
    this.ambientLoop.pause();
  }
}
