import { Component, OnInit } from '@angular/core';
import { MapComponent } from './map/map.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
} from '@ionic/angular/standalone';
import { ChartsHelperService } from './charts/charts-helper.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gimmicks',
  standalone: true,
  imports: [
    IonIcon,
    MapComponent,
    RouterModule,
    TranslateModule,
    IonFab,
    IonFabButton,
    IonFabList,
    CommonModule,
  ],
  templateUrl: './gimmicks.component.html',
  styleUrl: './gimmicks.component.css',
})
export class GimmicksComponent implements OnInit {
  innerWidth: number;

  showSubMenu: boolean = false;
  fadeOut: boolean = true;

  constructor(private chartsHelperService: ChartsHelperService) {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.chartsHelperService.detectChanges.subscribe(() => {
      this.innerWidth = window.innerWidth;
    });
  }

  hideSubMenu() {
    setTimeout(() => {
      this.showSubMenu = false;
    }, 270);
    this.fadeOut = true;
  }
}
