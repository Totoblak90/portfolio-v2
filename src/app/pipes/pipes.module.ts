import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortReposPipe } from './sort-repos.pipe';
import { FilterByWordPipe } from './filter-by-word.pipe';



@NgModule({
  declarations: [
    SortReposPipe,
    FilterByWordPipe
  ],
  exports: [
    SortReposPipe,
    FilterByWordPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
