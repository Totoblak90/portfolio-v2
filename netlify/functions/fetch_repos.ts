import { HandlerEvent, HandlerContext, Handler} from "@netlify/functions";
import { GithubFullResponse, Repo } from "netlify/interfaces";
import { flattedRes, getPublicRepositories } from "./utils";



const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  try {
    const response =  await getPublicRepositories();

    const flattedRepositories = flattedRes(response) as GithubFullResponse[]

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

