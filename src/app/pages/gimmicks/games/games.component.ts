import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    RouterModule,
    TranslateModule,
    MatMenuModule,
  ],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css',
})
export class GamesComponent {
  gameName:string;

  constructor(private translate: TranslateService, private router: Router) {
    let urlParts = router.url.split('/');
    let currentGame = urlParts[urlParts.length - 1];
    switch (currentGame) {
      case 'moorhuhn':
        this.gameName = 'Moorhuhn';
        break;
      case 'knowledge-quiz':
        this.translate
          .get('gimmicks.games.knowledgeQuiz')
          .subscribe((res: string) => {
            this.gameName = res;
          });
        break;
      case 'jigsaw':
        this.translate.get('gimmicks.games.jigsaw').subscribe((res: string) => {
          this.gameName = res;
        });
        break;
      case 'memo-quiz':
        this.translate
          .get('gimmicks.games.memoQuiz')
          .subscribe((res: string) => {
            this.gameName = res;
          });
        break;
      case 'connect-four':
        this.translate
          .get('gimmicks.games.connectFour')
          .subscribe((res: string) => {
            this.gameName = res;
          });
        break;
      case 'tiktaktoe':
        this.gameName = 'TikTakToe';
        break;

      default:
        break;
    }
  }

  changeGame(translation: string) {
    this.translate.get(translation).subscribe((res: string) => {
      this.gameName = res;
    });
  }
}
