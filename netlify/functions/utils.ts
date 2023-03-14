import axios, { AxiosResponse } from "axios";
import * as flatted from 'flatted';
const { GITHUB_ACCESS_TOKEN } = process.env;

export function flattedRes(response: AxiosResponse<any, any>) {
  return flatted.parse(flatted.stringify(response.data))
}


export function getCommitHistory(repoName: string): Promise<AxiosResponse<any, any>> {
  return axios.get(`https://api.github.com/repos/Totoblak90/${repoName}/commits?per_page=100`, {
      headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
      },
  })
}


export function getPublicRepositories(): Promise<AxiosResponse<any, any>> {
  return axios
    .get(`https://api.github.com/users/Totoblak90/repos`, {
      params: {
        visibility: 'public',
      },
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
      },
    })
}

export function fetchCommitDate(repo_name: string, commit_id: string) {
  return axios.get(`https://api.github.com/repos/Totoblak90/${repo_name}/commits/${commit_id}`, {
    headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
    },
  })
}
