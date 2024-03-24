import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [TranslateModule, RouterModule, MatTooltipModule],
})
export class SkillsComponent {
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
