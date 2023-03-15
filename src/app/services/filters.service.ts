import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  public searchTerm = new BehaviorSubject<string>('');
  public sortingValue = new BehaviorSubject<'A-Z' | 'Z-A'>('A-Z');
  public filterByDate = new BehaviorSubject<{startDate?: Date, endDate?: Date}>({})

}
