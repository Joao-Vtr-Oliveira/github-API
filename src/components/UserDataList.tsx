import { githubUserType } from '../types/githubUserType';

const UserDataList = ({ data }: { data: githubUserType }) => {
	return (
		<ul className='list-disc'>
			{data && (
				<div>
					{data?.company && <li>Company: {data.company}</li>}
					{data?.blog && <li>blog: {data.blog}</li>}
					{data?.location && <li>location: {data.location}</li>}
					{data?.email && <li>email: {data.email}</li>}
					{data?.hireable && <li>hireable: {data.hireable ? 'Yes' : 'No'}</li>}
					{data?.twitter_username && (
						<li>twitter_username: {data.twitter_username}</li>
					)}
				</div>
			)}
		</ul>
	);
};

export default UserDataList;
