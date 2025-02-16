import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  changeGameName = new Subject<string>();

  constructor() {}
}
