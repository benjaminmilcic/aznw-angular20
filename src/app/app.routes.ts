import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GimmicksComponent } from './pages/gimmicks/gimmicks.component';
import { MapComponent } from './pages/gimmicks/map/map.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CalendarComponent } from './pages/gimmicks/calendar/calendar.component';
import { OverviewComponent } from './pages/gimmicks/overview/overview.component';
import { GuestbookComponent } from './pages/gimmicks/guestbook/guestbook.component';
import { PrintScheduleComponent } from './pages/gimmicks/calendar/print-schedule/print-schedule.component';
import { DiagramsComponent } from './pages/gimmicks/diagrams/diagrams.component';

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
      {
        path: 'guestbook',
        component: GuestbookComponent,
      },
      {
        path: 'diagrams',
        component: DiagramsComponent,
      },
    ],
  },
  {
    path: 'print/:printDate',
    outlet: 'print',
    component: PrintScheduleComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
;