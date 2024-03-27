import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartsHelperService {
  detectChanges = new Subject<void>();

  periodChange = new Subject<number>();

  yearChange = new Subject<'2022' | '2023'>();
  kindOfConsumptionChange = new Subject<'electricity' | 'water' | 'gas'>();
}
