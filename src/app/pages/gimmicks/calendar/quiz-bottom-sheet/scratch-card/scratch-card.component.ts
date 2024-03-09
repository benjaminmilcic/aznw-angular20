import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-scratch-card',
  standalone: true,
  imports: [],
  templateUrl: './scratch-card.component.html',
  styleUrl: './scratch-card.component.css',
})
export class ScratchCardComponent implements AfterViewInit, OnChanges {
  @Input() word: string;

  @ViewChild('scratchCanvas')
  scratchCanvas: ElementRef<HTMLCanvasElement>;

  context: CanvasRenderingContext2D;

  isDragging = false;

  @HostListener('touchstart', ['$event']) onTouchStart(event) {
    event.preventDefault();
    this.isDragging = true;
    let rect = this.scratchCanvas.nativeElement.getBoundingClientRect();
    this.scratch(
      event.touches[0].pageX - rect.x,
      event.touches[0].pageY - rect.y
    );
  }

  @HostListener('touchmove', ['$event']) onTouchMove(event) {
    event.preventDefault();
    if (this.isDragging) {
      let rect = this.scratchCanvas.nativeElement.getBoundingClientRect();
      this.scratch(
        event.touches[0].pageX - rect.x,
        event.touches[0].pageY - rect.y
      );
    }
  }

  @HostListener('touchend', ['$event']) onTouchEnd(event) {
    event.preventDefault();
    this.isDragging = false;
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    event.preventDefault();
    this.isDragging = true;
    let rect = this.scratchCanvas.nativeElement.getBoundingClientRect();
    this.scratch(event.pageX - rect.x, event.pageY - rect.y);
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    event.preventDefault();
    if (this.isDragging) {
      let rect = this.scratchCanvas.nativeElement.getBoundingClientRect();
      this.scratch(event.pageX - rect.x, event.pageY - rect.y);
    }
  }

  @HostListener('mouseup', ['$event']) onMouseUp(event: MouseEvent) {
    event.preventDefault();
    this.isDragging = false;
  }

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.context = this.scratchCanvas.nativeElement.getContext('2d');
    this.fillScratchCard();
  }

  fillScratchCard() {
    this.context.globalCompositeOperation = 'source-over';
    this.context.fillStyle = 'gray';
    this.context.fillRect(0, 0, 250, 50);
    this.context.fillStyle = 'blue';
    this.context.font = 'bold 16px serif';
    this.context.fillText('Antwort frei rubbeln', 49, 30, 650);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['word'].firstChange) {
      this.fillScratchCard();
    }
  }

  scratch(x: number, y: number) {
    this.context.globalCompositeOperation = 'destination-out';
    this.context.beginPath();
    this.context.arc(x, y, 5, 0, 2 * Math.PI);
    this.context.fill();
  }
}
