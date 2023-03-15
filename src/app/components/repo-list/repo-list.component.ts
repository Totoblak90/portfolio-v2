import { Component, OnDestroy } from '@angular/core';
import { Repository } from 'src/app/interface/repository.interface';
import { HttpService } from 'src/app/services/http.service';
import { Commit } from 'src/app/interface/commit.interface';
import { fakeRepos } from '../../constants/placeholders';
import { FiltersService } from '../../services/filters.service';

@Component({
  selector: 'repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss']
})
export class RepoListComponent {

  repoList: Repository[]  = fakeRepos;

  loading = false;
  fetchingData = false;

  get searchTerm() {
    if (this.fetchingData) return '';
    return this.filtersService.searchTerm.value
  }

  get sortingValue():'A-Z' | 'Z-A' {
    if (this.fetchingData) return 'A-Z';
    return this.filtersService.sortingValue.value
  }

  constructor(private httpService: HttpService, private filtersService: FiltersService) {
    // this.fetchRepos();
  }

  private async fetchRepos() {
    this.httpService.allRepos().subscribe(async res => {
      this.repoList = res;

      if (this.repoList && this.repoList.length) {
        try {
          await this.fillCommits();
        } catch (error) {
          console.log('fetchRepos: ', error);
          this.fetchingData = false;
        }
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
          try {
            await this.updateCommitDate(i);
          } catch (error) {
            console.log('fillCommits: ', error);
            break;
          }
        }

      }

      if (i === max - 1) this.fetchingData = false;
    }


  }

  private async updateCommitDate(i: number) {
    if (this.repoList[i].commits) {
      const max = this.repoList[i].commits.length;

      for (let j = 0; j < max; j++) {

        if (this.repoList[i].commits[j]) {
          try {
            const commitDate = await this.httpService.fetchCommitCreationDate(this.repoList[i], this.repoList[i].commits[j]);
            if (commitDate) {
              this.repoList[i].commits[j].creation = commitDate.creationDate;
              this.loading = false;
            }
          } catch (error) {
            console.log('updateCommitDate: ', error);
            break;
          }
        }

      }

    }
  }
}
