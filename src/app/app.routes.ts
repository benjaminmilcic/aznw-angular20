import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GimmicksComponent } from './pages/gimmicks/gimmicks.component';
import { MapComponent } from './pages/gimmicks/map/map.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CalendarComponent } from './pages/gimmicks/calendar/calendar.component';
import { OverviewComponent } from './pages/gimmicks/overview/overview.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'gimmicks',
    component: GimmicksComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
