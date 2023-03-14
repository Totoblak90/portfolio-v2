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

  addCommitToRepo(repo: Repository) {
    return this.http.post<Repository>(`${this.baseUrl}/.netlify/functions/map_commits`, {repo})
  }

  filterReposByName(term: string) {
    return this.http.get<Repository[]>(`${this.apiBaseUrl}/repositories/search?term=${term}`)
  }

  allCommits(repo_id: number): Observable<Commit[]> {
    return this.http.get<Commit[]>(`${this.apiBaseUrl}/commits?repo_id=${repo_id}`)
  }

  fiterCommitsByDate(startDate: Date, endDate: Date, repo_id: number): Observable<Commit[]> {
    return this.http.get<Commit[]>(`${this.apiBaseUrl}/commits/search?start_date=${startDate}&end_date=${endDate}&repo_id=${repo_id}`)
  }
}
