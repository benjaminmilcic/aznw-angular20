import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { YahtzeeScoreComponent } from './yahtzee-score/yahtzee-score.component';
import { MatButtonModule } from '@angular/material/button';
import { YahtzeeDiceComponent } from './yahtzee-dice/yahtzee-dice.component';
import { YahtzeeService } from './yahtzee.service';
import { YahtzeeWinner } from './yahtzee.types';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-yahtzee',
  standalone: true,
  imports: [
    CommonModule,
    YahtzeeScoreComponent,
    YahtzeeDiceComponent,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatIconModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './yahtzee.component.html',
  styleUrl: './yahtzee.component.css',
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
})
export class YahtzeeComponent implements OnInit, OnDestroy {
  diceOne: number;
  diceTwo: number;
  diceThree: number;
  diceFour: number;
  diceFive: number;
  diceCount = 0;
  diceRollButtonDisabled = false;
  winners: YahtzeeWinner;
  showWinners: boolean = false;
  gameStarted: boolean = false;
  showStartUpError = false;
  nextplayerSubscription: Subscription;
  gameOverSubscription: Subscription;
  selectFieldSubscription: Subscription;
  showSelectField: boolean;

  constructor(
    public yahtzeeService: YahtzeeService,
    private gameService: GamesService
  ) {}

  ngOnInit(): void {
    this.gameService.changeGameName.next('yahtzee');
    this.newGame();
    this.nextplayerSubscription = this.yahtzeeService.nextplayer.subscribe(
      () => {
        this.diceCount = 0;
        this.diceRollButtonDisabled = false;
        if (
          this.yahtzeeService.players[
            this.yahtzeeService.playerOnMoveIndex
          ].includes('Computer')
        ) {
          this.yahtzeeService.dicesClickable = false;

          this.makeComputerMove();
        } else {
          this.yahtzeeService.dicesClickable = true;
        }
      }
    );
    this.gameOverSubscription = this.yahtzeeService.gameOver.subscribe(
      (result) => {
        this.winners = result;
        this.showWinners = true;
      }
    );
    this.selectFieldSubscription = this.yahtzeeService.selectField.subscribe(
      (result) => {
        this.showSelectField = result;
      }
    );
  }

  renameComputers(names: string[]): string[] {
    let count = names.filter((name) => name === 'Computer').length;
    let index = 0;

    return names.map((name) => {
      if (name === 'Computer' && count > 1) {
        index++;
        return `Computer-${index}`;
      }
      return name;
    });
  }

  renameToComputer(names: string[]): string[] {
    return names.map((name) =>
      name.startsWith('Computer-') ? 'Computer' : name
    );
  }

  startGame() {
    this.yahtzeeService.players = this.yahtzeeService.players.map((item) =>
      item.trim()
    );
    this.yahtzeeService.players = this.renameToComputer(
      this.yahtzeeService.players
    );
    this.yahtzeeService.players = this.renameComputers(
      this.yahtzeeService.players
    );
    if (this.yahtzeeService.players.includes('')) {
      this.showStartUpError = true;
      return;
    }
    this.showStartUpError = false;
    this.gameStarted = true;
    this.yahtzeeService.playerOnMoveIndex = 0;
    this.yahtzeeService.moveCount = 0;
    this.diceCount = 0;
    this.diceRollButtonDisabled = false;
    this.showWinners = false;
    this.yahtzeeService.startGame.next();
    this.yahtzeeService.dicesClickable = true;
    if (
      this.yahtzeeService.players[
        this.yahtzeeService.playerOnMoveIndex
      ].includes('Computer')
    ) {
      this.makeComputerMove();
    }
  }

  async makeComputerMove() {
    this.yahtzeeService.dicesClickable = false;
    this.diceRollButtonDisabled = true;
    await this.delay(1000);
    this.rollDice();
    await this.delay(1200);
    let decicion = this.executeDecideWhichDiceToKeep();
    this.yahtzeeService.dicesToKeep.next(decicion);
    await this.delay(100);
    this.rollDice();
    await this.delay(1200);
    decicion = this.executeDecideWhichDiceToKeep(decicion);
    this.yahtzeeService.dicesToKeep.next(decicion);
    await this.delay(100);
    this.rollDice();
  }

  delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  rollDice() {
    if (this.yahtzeeService.playerOnMoveIndex === 0 && this.diceCount === 0) {
      this.yahtzeeService.moveCount++;
    }
    if (this.diceCount === 0) {
      this.yahtzeeService.dices.forEach((dice) => (dice.checked = false));
    }
    this.diceCount++;
    if (this.diceCount === 3) {
      this.diceRollButtonDisabled = true;
    }
    if (!this.yahtzeeService.dices[0].checked) {
      this.diceOne = Math.floor(Math.random() * 6 + 1);
    }
    if (!this.yahtzeeService.dices[1].checked) {
      this.diceTwo = Math.floor(Math.random() * 6 + 1);
    }
    if (!this.yahtzeeService.dices[2].checked) {
      this.diceThree = Math.floor(Math.random() * 6 + 1);
    }
    if (!this.yahtzeeService.dices[3].checked) {
      this.diceFour = Math.floor(Math.random() * 6 + 1);
    }
    if (!this.yahtzeeService.dices[4].checked) {
      this.diceFive = Math.floor(Math.random() * 6 + 1);
    }
    this.setDicesinService();
    this.yahtzeeService.rollDice.next({
      dice1: this.diceOne,
      dice2: this.diceTwo,
      dice3: this.diceThree,
      dice4: this.diceFour,
      dice5: this.diceFive,
      diceCount: this.diceCount,
    });
  }

  setDicesinService() {
    switch (this.diceOne) {
      case 1:
        this.yahtzeeService.dice1 = 1;
        break;
      case 2:
        this.yahtzeeService.dice1 = 5;
        break;
      case 3:
        this.yahtzeeService.dice1 = 6;
        break;
      case 4:
        this.yahtzeeService.dice1 = 3;
        break;
      case 5:
        this.yahtzeeService.dice1 = 4;
        break;
      case 6:
        this.yahtzeeService.dice1 = 2;
        break;

      default:
        break;
    }
    switch (this.diceTwo) {
      case 1:
        this.yahtzeeService.dice2 = 1;
        break;
      case 2:
        this.yahtzeeService.dice2 = 5;
        break;
      case 3:
        this.yahtzeeService.dice2 = 6;
        break;
      case 4:
        this.yahtzeeService.dice2 = 3;
        break;
      case 5:
        this.yahtzeeService.dice2 = 4;
        break;
      case 6:
        this.yahtzeeService.dice2 = 2;
        break;

      default:
        break;
    }
    switch (this.diceThree) {
      case 1:
        this.yahtzeeService.dice3 = 1;
        break;
      case 2:
        this.yahtzeeService.dice3 = 5;
        break;
      case 3:
        this.yahtzeeService.dice3 = 6;
        break;
      case 4:
        this.yahtzeeService.dice3 = 3;
        break;
      case 5:
        this.yahtzeeService.dice3 = 4;
        break;
      case 6:
        this.yahtzeeService.dice3 = 2;
        break;

      default:
        break;
    }
    switch (this.diceFour) {
      case 1:
        this.yahtzeeService.dice4 = 1;
        break;
      case 2:
        this.yahtzeeService.dice4 = 5;
        break;
      case 3:
        this.yahtzeeService.dice4 = 6;
        break;
      case 4:
        this.yahtzeeService.dice4 = 3;
        break;
      case 5:
        this.yahtzeeService.dice4 = 4;
        break;
      case 6:
        this.yahtzeeService.dice4 = 2;
        break;

      default:
        break;
    }
    switch (this.diceFive) {
      case 1:
        this.yahtzeeService.dice5 = 1;
        break;
      case 2:
        this.yahtzeeService.dice5 = 5;
        break;
      case 3:
        this.yahtzeeService.dice5 = 6;
        break;
      case 4:
        this.yahtzeeService.dice5 = 3;
        break;
      case 5:
        this.yahtzeeService.dice5 = 4;
        break;
      case 6:
        this.yahtzeeService.dice5 = 2;
        break;

      default:
        break;
    }
  }

  newGame() {
    this.gameStarted = false;
  }

  addPlayer() {
    this.yahtzeeService.players.push('');
  }

  addComputer() {
    this.yahtzeeService.players.push('Computer');
  }

  deletePlayer(index: number) {
    this.yahtzeeService.players.splice(index, 1);
  }

  trackByIndex(index: number, item: any) {
    return index;
  }

  decideWhichDiceToKeep(
    dice: number[], // Aktuelle Würfelwerte
    takenFields: {
      // Bereits belegte Felder (null = frei, sonst Punktzahl)
      ones: number | null;
      twos: number | null;
      threes: number | null;
      fours: number | null;
      fives: number | null;
      sixes: number | null;
      threeInARow: number | null;
      fourInARow: number | null;
      fullHouse: number | null;
      smallStraight: number | null;
      largeStraight: number | null;
      chance: number | null;
      yahtzee: number | null;
    },
    rollsLeft: number, // Verbleibende Würfe (3, 2 oder 1)
    previousKeep: boolean[] = [false, false, false, false, false] // Welche Würfel bereits behalten wurden
  ): boolean[] {
    let counts = new Map<number, number>();
    dice.forEach((d) => counts.set(d, (counts.get(d) || 0) + 1));

    let keepDice = [false, false, false, false, false]; // Standard: Nichts behalten

    // **1️⃣ Falls vorher ALLE Würfel behalten wurden, nicht mehr ändern!**
    if (previousKeep.every((k) => k)) return previousKeep;

    // **2️⃣ YAHTZEE – Höchste Priorität! Falls 5 gleiche Würfel & Yahtzee noch frei ist, behalten!**
    for (let [value, count] of counts) {
      if (count === 5 && takenFields.yahtzee === null) {
        return [true, true, true, true, true];
      }
    }

    // **3️⃣ FULL HOUSE – Falls gewürfelt und noch frei, ALLES behalten!**
    let hasThree = false,
      hasPair = false;
    counts.forEach((count) => {
      if (count === 3) hasThree = true;
      if (count === 2) hasPair = true;
    });
    if (hasThree && hasPair && takenFields.fullHouse === null) {
      return [true, true, true, true, true]; // Full House bleibt bestehen!
    }

    // **4️⃣ Große Straße beibehalten**
    let sorted = [...new Set(dice)].sort().join('');
    if (
      (sorted === '12345' || sorted === '23456') &&
      takenFields.largeStraight === null
    ) {
      return [true, true, true, true, true];
    }

    // **5️⃣ Kleine Straße beibehalten**
    if (
      (sorted.includes('1234') ||
        sorted.includes('2345') ||
        sorted.includes('3456')) &&
      takenFields.smallStraight === null
    ) {
      return [true, true, true, true, true];
    }

    // **6️⃣ Yahtzee-Strategie: Falls 4 gleiche Würfel & Yahtzee noch frei ist, darauf spielen!**
    for (let [value, count] of counts) {
      if (count === 4 && takenFields.yahtzee === null) {
        return dice.map((d) => d === value);
      }
    }

    // **7️⃣ Falls 3 oder mehr gleiche Würfel & das passende Feld für die Zahl noch frei ist, behalten!**
    for (let [value, count] of counts) {
      let fieldName =
        value === 6
          ? 'sixes'
          : value === 5
          ? 'fives'
          : value === 4
          ? 'fours'
          : value === 3
          ? 'threes'
          : value === 2
          ? 'twos'
          : 'ones';
      if (count >= 3 && takenFields[fieldName] === null) {
        return dice.map((d) => d === value);
      }
    }

    // **8️⃣ Falls 3 gleiche Würfel & Dreierpasch noch frei ist, behalten!**
    for (let [value, count] of counts) {
      if (count === 3 && takenFields.threeInARow === null) {
        return dice.map((d) => d === value);
      }
    }

    // **9️⃣ Falls 4 gleiche Würfel & Viererpasch noch frei ist, behalten!**
    for (let [value, count] of counts) {
      if (count === 4 && takenFields.fourInARow === null) {
        return dice.map((d) => d === value);
      }
    }

    // **🔟 Dreierpasch/Viererpasch Strategie – Verbesserte Erkennung neuer Würfel!**
    let bestPaschNumber = null,
      bestPaschCount = 0;
    counts.forEach((count, number) => {
      if (count >= 2 && count * number > bestPaschCount) {
        bestPaschCount = count * number;
        bestPaschNumber = number;
      }
    });
    if (
      bestPaschNumber !== null &&
      (takenFields.threeInARow === null || takenFields.fourInARow === null)
    ) {
      return dice.map((d) => d === bestPaschNumber);
    }

    // **🔟 Obere Sektion optimieren (Ziel: 63-Punkte Bonus)**
    let bestUpperNumber = null,
      bestUpperValue = 0;
    [6, 5, 4, 3, 2, 1].forEach((num) => {
      if (
        takenFields[
          num === 6
            ? 'sixes'
            : num === 5
            ? 'fives'
            : num === 4
            ? 'fours'
            : num === 3
            ? 'threes'
            : num === 2
            ? 'twos'
            : 'ones'
        ] === null
      ) {
        let value = (counts.get(num) || 0) * num;
        if (value > bestUpperValue) {
          bestUpperValue = value;
          bestUpperNumber = num;
        }
      }
    });
    if (bestUpperNumber !== null) {
      return dice.map((d) => d === bestUpperNumber);
    }

    // **🔟 Chance Strategie (falls keine andere Option)**
    if (takenFields.chance === null) {
      let maxValue = Math.max(...dice);
      return dice.map((d) => d === maxValue);
    }

    // **🔟 Standard-Fall: Häufigste Zahl behalten**
    let mostCommonValue = null,
      maxCount = 0;
    counts.forEach((count, number) => {
      if (count > maxCount) {
        maxCount = count;
        mostCommonValue = number;
      }
    });
    return dice.map((d) => d === mostCommonValue);
  }

  executeDecideWhichDiceToKeep(
    previousKeep: boolean[] = [false, false, false, false, false]
  ): boolean[] {
    return this.decideWhichDiceToKeep(
      [
        this.yahtzeeService.dice1,
        this.yahtzeeService.dice2,
        this.yahtzeeService.dice3,
        this.yahtzeeService.dice4,
        this.yahtzeeService.dice5,
      ],
      {
        ones: this.yahtzeeService.score[0].user[
          this.yahtzeeService.playerOnMoveIndex
        ].number,
        twos: this.yahtzeeService.score[1].user[
          this.yahtzeeService.playerOnMoveIndex
        ].number,
        threes:
          this.yahtzeeService.score[2].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
        fours:
          this.yahtzeeService.score[3].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
        fives:
          this.yahtzeeService.score[4].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
        sixes:
          this.yahtzeeService.score[5].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
        threeInARow:
          this.yahtzeeService.score[8].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
        fourInARow:
          this.yahtzeeService.score[9].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
        fullHouse:
          this.yahtzeeService.score[10].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
        smallStraight:
          this.yahtzeeService.score[11].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
        largeStraight:
          this.yahtzeeService.score[12].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
        chance:
          this.yahtzeeService.score[13].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
        yahtzee:
          this.yahtzeeService.score[14].user[
            this.yahtzeeService.playerOnMoveIndex
          ].number,
      },
      4 - this.diceCount,
      previousKeep
    );
  }

  ngOnDestroy(): void {
    if (this.nextplayerSubscription) {
      this.nextplayerSubscription.unsubscribe();
    }
    if (this.gameOverSubscription) {
      this.gameOverSubscription.unsubscribe();
    }
    if (this.selectFieldSubscription) {
      this.selectFieldSubscription.unsubscribe();
    }
  }
}
