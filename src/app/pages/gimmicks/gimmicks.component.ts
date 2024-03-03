import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gimmicks',
  standalone: true,
  imports: [MapComponent,RouterModule],
  templateUrl: './gimmicks.component.html',
  styleUrl: './gimmicks.component.css'
})
export class GimmicksComponent {

}
