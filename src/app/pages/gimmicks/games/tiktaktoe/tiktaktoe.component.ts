import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tiktaktoe',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tiktaktoe.component.html',
  styleUrl: './tiktaktoe.component.css',
})
export class TiktaktoeComponent {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  player: 'X' | 'O' = 'X';
  name1: string = 'Player 1';
  name2: string = 'Player 2';
  currentName: string = this.name1;
  moveCount = 1;
  showWin: boolean = false;
  showDraw = false;
  row1 = false;
  row2 = false;
  row3 = false;
  column1 = false;
  column2 = false;
  column3 = false;
  diagonal1 = false;
  diagonal2 = false;

  boardDisabled = false;

  makeMove(x: number, y: number) {
    if (this.moveCount < 10 && !this.showWin) {
      this.board[x][y] = this.player;
      this.player = this.player === 'X' ? 'O' : 'X';
      this.currentName = this.player === 'X' ? this.name1 : this.name2;
      this.moveCount++;
      this.checkWin();
      if (this.player === 'O' && !this.showDraw && !this.showWin) {
        this.makeComputerMove();
      }
    }
  }

  async makeComputerMove() {
    this.boardDisabled=true;
    await new Promise((f) => setTimeout(f, 500));
    let x: number;
    let y: number;
    do {
      x = this.getRandomNumber();
      y = this.getRandomNumber();
    } while (this.board[x][y] !== '');
    this.makeMove(x, y);
    this.boardDisabled = false;

  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * 3);
  }

  onNewGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.player = 'X';
    this.currentName = this.name1;
    this.moveCount = 1;
    this.showWin = false;
    this.showDraw = false;
    this.row1 = false;
    this.row2 = false;
    this.row3 = false;
    this.column1 = false;
    this.column2 = false;
    this.column3 = false;
    this.diagonal1 = false;
    this.diagonal2 = false;
  }

  checkWin() {
    this.row1 =
      this.board[0][0] === this.board[0][1] &&
      this.board[0][0] === this.board[0][2] &&
      !this.board[0].includes('');
    this.row2 =
      this.board[1][0] === this.board[1][1] &&
      this.board[1][0] === this.board[1][2] &&
      !this.board[1].includes('');
    this.row3 =
      this.board[2][0] === this.board[2][1] &&
      this.board[2][0] === this.board[2][2] &&
      !this.board[2].includes('');
    this.column1 =
      this.board[0][0] === this.board[1][0] &&
      this.board[0][0] === this.board[2][0] &&
      !this.board.map((item) => item[0]).includes('');
    this.column2 =
      this.board[0][1] === this.board[1][1] &&
      this.board[0][1] === this.board[2][1] &&
      !this.board.map((item) => item[1]).includes('');
    this.column3 =
      this.board[0][2] === this.board[1][2] &&
      this.board[0][2] === this.board[2][2] &&
      !this.board.map((item) => item[2]).includes('');
    this.diagonal1 =
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2] &&
      this.board[0][0] !== '' &&
      this.board[1][1] !== '' &&
      this.board[2][2] !== '';
    this.diagonal2 =
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][0] &&
      this.board[0][2] !== '' &&
      this.board[1][1] !== '' &&
      this.board[2][0] !== '';
    if (
      this.row1 ||
      this.row2 ||
      this.row3 ||
      this.column1 ||
      this.column2 ||
      this.column3 ||
      this.diagonal1 ||
      this.diagonal2
    ) {
      this.onShowWin();
    } else if (this.moveCount === 10) {
      this.showDraw = true;
    }
  }

  onShowWin() {
    this.showWin = true;
  }
}
