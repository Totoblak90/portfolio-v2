import { Component, OnDestroy } from '@angular/core';
import { Repository } from 'src/app/interface/repository.interface';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { Commit } from 'src/app/interface/commit.interface';
import { fakeRepos } from '../../constants/placeholders';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {

  repoList: Repository[]  = [];

  loading = true;
  fetchingData = true;

  get searchTerm() {
    return this.filtersService.searchTerm.value
  }

  get sortingValue() {
    return this.filtersService.sortingValue.value
  }

  constructor(private httpService: HttpService, private filtersService: FiltersService) {
    this.fetchRepos();
  }

  private async fetchRepos() {
    this.httpService.allRepos().subscribe(async res => {
      this.repoList = res;

      if (this.repoList && this.repoList.length) {
        await this.fillCommits();
      }

    })
  }

  private async fillCommits() {

    const max = this.repoList.length;
    for (let i = 0; i < max; i++) {
      if (this.repoList[i]) {

        const commits: { commits: Commit[] } | undefined = await this.httpService.addCommitToRepo(this.repoList[i]!);

        if (commits && this.repoList[i]) {
          this.repoList[i].commits = commits.commits;
          await this.updateCommitDate(i);
        }

      }
    }
  }

  private async updateCommitDate(i: number) {
    if (this.repoList[i].commits) {
      const max = this.repoList[i].commits.length;

      for (let j = 0; j < max; j++) {

        if (this.repoList[i].commits[j]) {
          const commitDate = await this.httpService.fetchCommitCreationDate(this.repoList[i], this.repoList[i].commits[j]);
          if (commitDate) {
            this.repoList[i].commits[j].creation = commitDate.creationDate;
            this.loading = false;
          }
        }

      }

      this.fetchingData = false;

    }
  }
}
