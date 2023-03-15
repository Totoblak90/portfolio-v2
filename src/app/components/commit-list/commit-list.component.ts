import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Commit } from 'src/app/interface/commit.interface';
import { FiltersService } from '../../services/filters.service';

interface CommitExpansionModule {
  commits: Commit[],
  repoName: string;
}

@Component({
  selector: 'app-commit-list',
  templateUrl: './commit-list.component.html',
  styleUrls: ['./commit-list.component.scss']
})
export class CommitListComponent {

  commitList: Commit[] = [];
  repoName = ''

  get repositoryLink() {
    return 'https://github.com/Totoblak90/' + this.repoName
  }

  get selectedDates() {
    return this.filtersService.filterByDate.value
  }

  constructor(
    public dialogRef: MatDialogRef<CommitListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CommitExpansionModule,
    private filtersService: FiltersService
  ) {
    this.commitList = data.commits;
    this.repoName = data.repoName;
  }

  close() {
    this.dialogRef.close();
    this.filtersService.filterByDate.next({})
  }

  filter(commitList: Commit[]) {
    this.commitList = commitList;
  }

}
