import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { githubRepoType } from '../types/githubRepoType';

const ReposData = ({ repoData }: { repoData: githubRepoType[] }) => {
	return (
		<Card
			mt={5}
			h={250}
			maxWidth={500}
			minWidth={250}
			color='white'
			bg='black'
			overflowY='scroll'
		>
			<CardHeader textAlign='center'>
				<Heading size='10' className='text-3xl'>
					Repo Info:
				</Heading>
			</CardHeader>
			<CardBody>
				<ul className='list-disc'>
					{repoData?.map((repo, index) => (
						<div key={index} className='mt-3 mb-3'>
							<a href={repo.html_url} target='_blank'>
								<Heading
									textAlign='center'
									mb={2}
									size='10'
									className='text-2xl hover:text-purple-700'
								>
									{repo.name}
								</Heading>
							</a>
							{repo.description && <Text>Desc: {repo.description}</Text>}
							{repo.language && <Text>Language: {repo.language}</Text>}
							{repo.forks > 0 && <Text>Forks: {repo.forks}</Text>}
							{repo.stargazers_count > 0 && (
								<Text>Stars: {repo.stargazers_count}</Text>
							)}
						</div>
					))}
				</ul>
			</CardBody>
		</Card>
	);
};

export default ReposData;