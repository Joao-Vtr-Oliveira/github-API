import { githubRepoType } from '../types/githubRepoType';
import { githubUserType } from '../types/githubUserType';

export const githubUserRequest = async (username: string):Promise<githubUserType> => {
  try {
    const userData = await fetch(`https://api.github.com/users/${username}`);
    const dataJson = await userData.json();
    return dataJson;
  } catch(error: any) {
    throw new Error(error);
  }
}

export const githubRepoRequest = async (username: string):Promise<githubRepoType[]> => {
  try {
    const reposData = await fetch(`https://api.github.com/users/${username}/repos`);
    const dataJson = await reposData.json();
    return dataJson;
  } catch(error: any) {
    throw new Error(error);
  }
}