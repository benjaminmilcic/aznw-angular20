export interface RollDice {
  dice1: number;
  dice2: number;
  dice3: number;
  dice4: number;
  dice5: number;
  diceCount:number
}

export interface Dice{
    checked: boolean;
    marginLeft: string;
}

export interface ScoreRow {
  user: UserScore[];
  name: string;
  bigBorder: boolean;
}

export interface UserScore {
  number: number;
  suggestNumber: number;
  finished: boolean;
}

export interface YahtzeeWinner{
  names: string[];
  points: number[];
  ranks: number[];
}