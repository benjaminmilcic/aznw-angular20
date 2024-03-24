import { Component } from '@angular/core';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gimmicks',
  standalone: true,
  imports: [MapComponent, RouterModule, TranslateModule],
  templateUrl: './gimmicks.component.html',
  styleUrl: './gimmicks.component.css',
})
export class GimmicksComponent {}
