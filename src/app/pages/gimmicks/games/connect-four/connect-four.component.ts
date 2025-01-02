import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-connect-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect-four.component.html',
  styleUrl: './connect-four.component.css',
})
export class ConnectFourComponent {
  title = 'Connect Four';

  rows = 6;
  cols = 7;
  board: string[][] = [];
  currentPlayer = 'Red';
  winner: string | null = null;

  constructor() {
    this.resetBoard();
  }

  resetBoard() {
    this.board = Array.from({ length: this.rows }, () =>
      Array(this.cols).fill('')
    );
    this.currentPlayer = 'Red';
    this.winner = null;
  }

  dropDisc(colIndex: number) {
    if (this.winner || this.currentPlayer === 'Yellow') return;

    if (this.makeMove(colIndex)) {
      if (this.winner) return;

      setTimeout(() => this.makeComputerMove(), 500); // Delay for the computer's move
    }
  }

  makeMove(colIndex: number): boolean {
    for (let rowIndex = this.rows - 1; rowIndex >= 0; rowIndex--) {
      if (!this.board[rowIndex][colIndex]) {
        this.board[rowIndex][colIndex] = this.currentPlayer;
        if (this.checkWin(rowIndex, colIndex)) {
          this.winner = this.currentPlayer;
        }
        this.currentPlayer = this.currentPlayer === 'Red' ? 'Yellow' : 'Red';
        return true;
      }
    }
    return false;
  }

  makeComputerMove() {
    if (this.winner) return;

    // AI logic
    const colIndex = this.findBestMove();
    if (colIndex !== -1) {
      this.makeMove(colIndex);
    }
  }

  findBestMove(): number {
    // Check for winning or blocking moves
    for (let col = 0; col < this.cols; col++) {
      if (this.canWin(col, 'Yellow')) return col; // Try to win
      if (this.canWin(col, 'Red')) return col; // Block opponent
    }

    // Default to middle column or a random valid column
    const middle = Math.floor(this.cols / 2);
    if (this.isValidMove(middle)) return middle;

    const validCols = Array.from({ length: this.cols }, (_, col) => col).filter(
      (col) => this.isValidMove(col)
    );
    return validCols.length
      ? validCols[Math.floor(Math.random() * validCols.length)]
      : -1;
  }

  canWin(colIndex: number, player: string): boolean {
    for (let rowIndex = this.rows - 1; rowIndex >= 0; rowIndex--) {
      if (!this.board[rowIndex][colIndex]) {
        this.board[rowIndex][colIndex] = player;
        const win = this.checkWin(rowIndex, colIndex);
        this.board[rowIndex][colIndex] = ''; // Undo move
        if (win) return true;
        break;
      }
    }
    return false;
  }

  isValidMove(colIndex: number): boolean {
    return !this.board[0][colIndex];
  }

  checkWin(row: number, col: number): boolean {
    const directions = [
      { dr: 0, dc: 1 }, // horizontal
      { dr: 1, dc: 0 }, // vertical
      { dr: 1, dc: 1 }, // diagonal right
      { dr: 1, dc: -1 }, // diagonal left
    ];

    const player = this.board[row][col];
    for (const { dr, dc } of directions) {
      let count = 1;

      for (let step = 1; step < 4; step++) {
        const r = row + dr * step;
        const c = col + dc * step;
        if (
          r < 0 ||
          r >= this.rows ||
          c < 0 ||
          c >= this.cols ||
          this.board[r][c] !== player
        ) {
          break;
        }
        count++;
      }

      for (let step = 1; step < 4; step++) {
        const r = row - dr * step;
        const c = col - dc * step;
        if (
          r < 0 ||
          r >= this.rows ||
          c < 0 ||
          c >= this.cols ||
          this.board[r][c] !== player
        ) {
          break;
        }
        count++;
      }

      if (count >= 4) {
        return true;
      }
    }

    return false;
  }
}
