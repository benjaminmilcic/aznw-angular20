import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tiktaktoe2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tiktaktoe2.component.html',
  styleUrl: './tiktaktoe2.component.css',
})
export class Tiktaktoe2Component {
  title = 'Tic Tac Toe';

  board: string[][] = [];
  currentPlayer = 'X';
  winner: string | null = null;
  difficulty = 'Easy';

  constructor() {
    this.resetBoard();
  }

  resetBoard() {
    this.board = Array.from({ length: 3 }, () => Array(3).fill(''));
    this.currentPlayer = 'X';
    this.winner = null;
  }

  makeMove(row: number, col: number) {
    if (this.board[row][col] || this.winner || this.currentPlayer === 'O')
      return;

    this.board[row][col] = this.currentPlayer;
    if (this.checkWin()) {
      this.winner = this.currentPlayer;
      return;
    }

    this.currentPlayer = 'O';
    setTimeout(() => this.makeComputerMove(), 500); // Delay for computer's move
  }

  makeComputerMove() {
    if (this.winner) return;

    const move = this.findBestMove();
    if (move) {
      this.board[move.row][move.col] = this.currentPlayer;
      if (this.checkWin()) {
        this.winner = this.currentPlayer;
      }
      this.currentPlayer = 'X';
    }
  }

  findBestMove(): { row: number; col: number } | null {
    // Difficulty-specific logic
    if (this.difficulty === 'Hard') {
      return (
        this.findWinningMove('O') ||
        this.findWinningMove('X') ||
        this.findRandomMove()
      );
    } else if (this.difficulty === 'Medium') {
      return this.findWinningMove('O') || this.findRandomMove();
    } else {
      return this.findRandomMove();
    }
  }

  findWinningMove(player: string): { row: number; col: number } | null {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (!this.board[row][col]) {
          this.board[row][col] = player;
          const isWin = this.checkWin();
          this.board[row][col] = ''; // Undo move
          if (isWin) return { row, col };
        }
      }
    }
    return null;
  }

  findRandomMove(): { row: number; col: number } | null {
    const availableMoves: { row: number; col: number }[] = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (!this.board[row][col]) availableMoves.push({ row, col });
      }
    }
    if (availableMoves.length === 0) return null;
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  }

  checkWin(): boolean {
    const lines = [
      // Rows
      [
        { r: 0, c: 0 },
        { r: 0, c: 1 },
        { r: 0, c: 2 },
      ],
      [
        { r: 1, c: 0 },
        { r: 1, c: 1 },
        { r: 1, c: 2 },
      ],
      [
        { r: 2, c: 0 },
        { r: 2, c: 1 },
        { r: 2, c: 2 },
      ],
      // Columns
      [
        { r: 0, c: 0 },
        { r: 1, c: 0 },
        { r: 2, c: 0 },
      ],
      [
        { r: 0, c: 1 },
        { r: 1, c: 1 },
        { r: 2, c: 1 },
      ],
      [
        { r: 0, c: 2 },
        { r: 1, c: 2 },
        { r: 2, c: 2 },
      ],
      // Diagonals
      [
        { r: 0, c: 0 },
        { r: 1, c: 1 },
        { r: 2, c: 2 },
      ],
      [
        { r: 0, c: 2 },
        { r: 1, c: 1 },
        { r: 2, c: 0 },
      ],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        this.board[a.r][a.c] &&
        this.board[a.r][a.c] === this.board[b.r][b.c] &&
        this.board[a.r][a.c] === this.board[c.r][c.c]
      ) {
        return true;
      }
    }
    return false;
  }
}
