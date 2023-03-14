import { BackgroundHandler, HandlerEvent, HandlerContext} from "@netlify/functions";
import axios, { AxiosResponse } from "axios";
import * as flatted from 'flatted';
const { GITHUB_ACCESS_TOKEN } = process.env

function getPublicRepositories(): Promise<AxiosResponse<any, any>>
{
  console.log(GITHUB_ACCESS_TOKEN)

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
    // .pipe(
    //   map(
    //     (response) => {
    //       return
    //     }
    //   ),
    //   map((response: any[]) => {
    //     return response.map((repo) => {
    //         return {
    //             id: repo.id,
    //             name: repo.name,
    //             description: repo.description,
    //             route: repo.full_name,
    //             user_name: repo.owner.login
    //         }
    //     });
    //   })
    // );
}

export const handler: BackgroundHandler = async (event: HandlerEvent, context: HandlerContext) => {
  const response =  await getPublicRepositories()
  const flattedResponse = flatted.parse(flatted.stringify(response)) as any[]
  console.log(flattedResponse)

};

