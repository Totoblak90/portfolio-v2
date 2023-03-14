export interface Commit {
  commit_id: string;
  message: string;
  redirect_url: string;
  creation: Date;
  repo_id: number;
}
