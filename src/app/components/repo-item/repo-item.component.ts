import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/interface/repository.interface';
import {MatDialog} from '@angular/material/dialog';
import { CommitListComponent } from '../commit-list/commit-list.component';
import { take } from 'rxjs/operators';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.scss']
})
export class RepoItemComponent {
  @Input() repo: Repository | undefined;

  get showRepo() {
    return this.repo && this.repo.commits && this.repo.commits.length && this.repo.commits[this.repo.commits.length - 1]?.creation
  }

  constructor(public dialog: MatDialog, private filtersService: FiltersService) {}

  seeMore() {
    this.dialog.open(CommitListComponent, {
      data: {
        commits: this.repo?.commits,
        repoName: this.repo?.name
      },
      panelClass: 'expansion-panel'
    })

    this.dialog.afterAllClosed.pipe(take(1)).subscribe(() => {
      this.filtersService.filterByDate.next({})
    })
  }
}
