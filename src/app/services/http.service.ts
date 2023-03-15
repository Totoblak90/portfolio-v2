import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Commit } from '../interface/commit.interface';
import { Repository } from '../interface/repository.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiBaseUrl = 'http://localhost:3000/api'
  private baseUrl = window.location.origin;

  constructor(private http: HttpClient) {}

  allRepos(): Observable<Repository[]> {
    return this.http.post<Repository[]>(`${this.baseUrl}/.netlify/functions/fetch_repos`, {})
  }

  addCommitToRepo(repo: Repository): Promise<{ commits: Commit[] } | undefined> {
    return this.http.post<{ commits: Commit[] }>(`${this.baseUrl}/.netlify/functions/map_commits`, {repo}).toPromise()
  }

  fetchCommitCreationDate(repo: Repository, commit: Commit) {
    return this.http.post<{ creationDate: Date }>(`${this.baseUrl}/.netlify/functions/update_commits_date`, {repo, commit}).toPromise()
  }
}
