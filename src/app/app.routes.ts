import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GimmicksComponent } from './pages/gimmicks/gimmicks.component';
import { MapComponent } from './pages/gimmicks/map/map.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CalendarComponent } from './pages/gimmicks/calendar/calendar.component';
import { OverviewComponent } from './pages/gimmicks/overview/overview.component';
import { GuestbookComponent } from './pages/gimmicks/guestbook/guestbook.component';
import { PrintScheduleComponent } from './pages/gimmicks/calendar/print-schedule/print-schedule.component';
import { ChartsComponent } from './pages/gimmicks/charts/charts.component';
import { AuthLoginComponent } from './pages/gimmicks/auth/auth-login/auth-login.component';
import { AuthMainComponent } from './pages/gimmicks/auth/auth-main/auth-main.component';
import { AuthComponent } from './pages/gimmicks/auth/auth.component';
import { AuthMainGuard } from './pages/gimmicks/auth/auth-main.guard';
import { AuthLoginGuard } from './pages/gimmicks/auth/auth-login.guard';

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
        path: 'charts',
        component: ChartsComponent,
      },
      {
        path: 'auth',
        component: AuthComponent,
        children: [
          {
            path: '',
            redirectTo: '/gimmicks/auth/login',
            pathMatch:'full'
          },
          {
            path: 'login',
            canActivate: [AuthLoginGuard],
            component: AuthLoginComponent,
          },
          {
            path: 'main',
            canActivate: [AuthMainGuard],
            component: AuthMainComponent,
          },
        ],
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
