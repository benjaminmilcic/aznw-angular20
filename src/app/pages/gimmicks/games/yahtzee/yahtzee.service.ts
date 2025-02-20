import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CurrentDice, Dice, RollDice, ScoreRow, YahtzeeWinner } from './yahtzee.types';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../../../environments/environment';



@Injectable({
  providedIn: 'root',
})
export class YahtzeeService {
  rollDice = new Subject<RollDice>();
  sendFinalDices = new Subject<RollDice>();
  nextplayer = new Subject<void>();
  gameOver = new Subject<YahtzeeWinner>();
  startGame = new Subject<void>();
  selectField = new Subject<boolean>();
  dicesToKeep = new Subject<boolean[]>();
  players: { name: string; isRemote: boolean }[] = [];
  playerOnMoveIndex: number;
  moveCount: number;
  dice1: number;
  dice2: number;
  dice3: number;
  dice4: number;
  dice5: number;
  score: ScoreRow[];
  dicesClickable = false;
  dices: Dice[] = [
    { checked: false, marginLeft: '-20px' },
    { checked: false, marginLeft: '-50px' },
    { checked: false, marginLeft: '-50px' },
    { checked: false, marginLeft: '-50px' },
    { checked: false, marginLeft: '-50px' },
  ];
  isRemoteGame: boolean;
  socket: Socket;
  currentRemoteDice: CurrentDice = null;
  rowToPutInRemote: number = null;
  name: string = '';

  constructor() {
    this.socket = io(environment.yahtzeeGame.webSocketsUrl, {
      transports: ['websocket'], // Verhindert Polling
    });
  }
}
