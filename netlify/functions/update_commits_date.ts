import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { Repo, ResponseCommit } from "netlify/interfaces";
import { fetchCommitDate, flattedRes } from './utils';

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (!event.body) {
    return {
      statusCode: 403,
      body: 'body was not provided'
    }
  }

  try {
    const parsedBody = JSON.parse(event.body)
    const commit: ResponseCommit  = parsedBody.commit;
    const repo: Repo = parsedBody.repo;
    if (!commit || !repo) {
      return {
        statusCode: 403,
        body: 'commit or repo data was not provided'
      }
    }

    const commitGithubResponse = await fetchCommitDate(repo.name, commit.commit_id);
    const commitData = flattedRes(commitGithubResponse) as any;
    const commitCreation = new Date(commitData.commit.author.date)

    return {
      statusCode: 200,
      body: JSON.stringify({ creationDate: commitCreation }),
    };

  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "error on update_commits_date" }),
    };
  }

};

export { handler };
