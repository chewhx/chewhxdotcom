import { Octokit } from 'octokit';

const octokit = new Octokit({
  auth: process.env.OKTOKIT_API_KEY,
});

export const getGitHubRepo = async (owner: string, repo: string) => {
  return await octokit.request('GET /repos/{owner}/{repo}', {
    owner,
    repo,
  });
};
