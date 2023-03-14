import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortReposPipe } from './sort-repos.pipe';
import { FilterByWordPipe } from './filter-by-word.pipe';
import { FilterProyectsByWordPipe } from './filter-proyects-by-word.pipe';
import { SortProyectsPipe } from './sort-proyects.pipe';



@NgModule({
  declarations: [
    SortReposPipe,
    FilterByWordPipe,
    FilterProyectsByWordPipe,
    SortProyectsPipe
  ],
  exports: [
    SortReposPipe,
    FilterByWordPipe,
    FilterProyectsByWordPipe,
    SortProyectsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
