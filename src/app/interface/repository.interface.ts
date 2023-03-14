import { Commit } from "./commit.interface";

export interface Repository {
  repo_id: number;
  name: string;
  description: string;
  route: string;
  user_name: string;
  commits: Commit[];
}
