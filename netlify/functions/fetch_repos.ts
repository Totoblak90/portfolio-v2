import { BackgroundHandler, HandlerEvent, HandlerContext, Handler} from "@netlify/functions";
import { Response } from "@netlify/functions/dist/function/response";
import axios, { AxiosResponse } from "axios";
import * as flatted from 'flatted';
import { GithubFullResponse, Repo } from "netlify/interfaces";
const { GITHUB_ACCESS_TOKEN } = process.env

function getPublicRepositories(): Promise<AxiosResponse<any, any>> {
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


function getCommitHistory(repoName: string): Promise<AxiosResponse<any, any>> {
  return axios.get(`https://api.github.com/repos/Totoblak90/${repoName}/commits?per_page=100`, {
      headers: {
          Accept: 'application/vnd.github.v3+json',
          Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`
      },
  })
  // .pipe(
  //     map((response: any) => flatted.parse(flatted.stringify(response.data))),
  // )
}

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const response =  await getPublicRepositories()
    const flattedRepositories = flatted.parse(flatted.stringify(response.data)) as GithubFullResponse[]

    const repositories: Repo[] =  flattedRepositories.map((repo) => {
      return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          route: repo.full_name,
          user_name: repo.owner.login
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(repositories)
    }
  } catch (error) {
    console.log('fetch-repos', error)
    return {
      statusCode: 500,
      body: 'Error on fetch-repos'
    }
  }
};

export { handler };

