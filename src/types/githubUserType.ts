export type githubUserType = {
	login: string;
	avatar_url: string;
	html_url: string;
	followers: number;
  following: number;
	name: string;
	bio: string | null;
	public_repos: number;
	created_at: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: boolean;
  twitter_username: string | null;
	message?: string | undefined;
};
