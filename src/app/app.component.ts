import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ScrollToTopComponent } from './pages/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
