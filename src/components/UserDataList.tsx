import { Box, ListItem, UnorderedList } from '@chakra-ui/react';
import { githubUserType } from '../types/githubUserType';

const UserDataList = ({ data }: { data: githubUserType }) => {
	return (
		<UnorderedList >
			{data && (
				<Box>
					{data?.company && <ListItem>Company: {data.company}</ListItem>}
					{data?.blog && <ListItem>blog: {data.blog}</ListItem>}
					{data?.location && <ListItem>location: {data.location}</ListItem>}
					{data?.email && <ListItem>email: {data.email}</ListItem>}
					{data?.hireable && <ListItem>hireable: {data.hireable ? 'Yes' : 'No'}</ListItem>}
					{data?.twitter_username && (
						<ListItem>twitter_username: {data.twitter_username}</ListItem>
					)}
				</Box>
			)}
		</UnorderedList>
	);
};

export default UserDataList;
