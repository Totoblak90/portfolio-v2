import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  filterForm: FormGroup = this.fb.group({
    search: [''],
    sort: ['A-Z']
  })

  private _destroy$ = new Subject();

  get sortingValue() {
    return this.filterForm.get('sort')?.value;
  }

  constructor(private fb: FormBuilder, private filtersService: FiltersService) {
    this.subscribeToSearchValueChanges();
    this.subscribeToSortValueChanges();
  }

  private subscribeToSearchValueChanges() {
    this.filterForm.get('search')?.valueChanges
      .pipe(takeUntil(this._destroy$),debounceTime(300))
      .subscribe((term: string) => {
        this.filtersService.searchTerm.next(term)
      })
  }

  private subscribeToSortValueChanges() {
    this.filterForm.get('sort')?.valueChanges
    .pipe(takeUntil(this._destroy$))
    .subscribe((sortingValue) => {
      this.filtersService.sortingValue.next(sortingValue)
    })
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

}
