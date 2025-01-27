import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: true,
  imports: [TranslateModule, RouterModule],
})
export class PortfolioComponent {
  constructor(public homeService:HomeService){}
}
