import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'ng2-tooltip-directive';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [TranslateModule,TooltipModule],
})
export class SkillsComponent {
  openLink(url: string) {
    window.open(url, '_blank');
  }
}
