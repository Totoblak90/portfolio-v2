import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { GithubCommitFullResponse, Repo, ResponseCommit } from "netlify/interfaces";
import axios, { AxiosResponse } from "axios";
import * as flatted from 'flatted';
import { getCommitHistory, flattedRes } from './utils';




const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (!event.body) {
    return {
      statusCode: 403,
      body: 'body was not provided'
    }
  }

  try {
    const parsedBody = JSON.parse(event.body)

    const repository: Repo = parsedBody.repo

    if (!repository) {
      return {
        statusCode: 403,
        body: 'repository data was not provided'
      }
    }

    const commitHistoryRes = await getCommitHistory(repository.name);
    const commitHistory = flattedRes(commitHistoryRes) as GithubCommitFullResponse[];
    const commits = commitHistory.map(commit => {
      return {
        commit_id: commit.sha,
        message: commit.commit.message,
        redirect_url: commit.html_url,
        repo_id: repository.id
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ commits })
    };
  } catch (error) {
    console.log('fetch-repos', error)
    return {
      statusCode: 500,
      body: 'Error on fetch-repos'
    }
  }
};

export { handler };
