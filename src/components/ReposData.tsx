import {
	Box,
	Card,
	CardBody,
	CardHeader,
	Heading,
	Link,
	Text,
} from '@chakra-ui/react';
import { githubRepoType } from '../types/githubRepoType';

const ReposData = ({ repoData }: { repoData: githubRepoType[] }) => {
	return (
		<Card mt={5} borderRadius='md' color='white' bg='gray.800'>
			<CardHeader textAlign='center' bg='purple.600' p={2}>
				<Heading size='md' color='white'>
					Repositories Info
				</Heading>
			</CardHeader>
			<CardBody>
				<ul style={{ listStyleType: 'none', padding: 0 }}>
					{repoData?.map((repo, index) => (
						<Box key={index} mb={4} p={4} borderRadius='md' bg='gray.700'>
							<Link href={repo.html_url} target='_blank'>
								<Heading
									size='lg'
									mb={2}
									color='cyan.400'
									_hover={{ color: 'purple.500' }}
								>
									{repo.name}
								</Heading>
							</Link>
							{repo.description && <Text mb={2}>{repo.description}</Text>}
							{repo.language && (
								<Text mb={1} fontSize='sm' color='gray.300'>
									Language: {repo.language}
								</Text>
							)}
							{repo.forks > 0 && (
								<Text mb={1} fontSize='sm' color='gray.300'>
									Forks: {repo.forks}
								</Text>
							)}
							{repo.stargazers_count > 0 && (
								<Text mb={1} fontSize='sm' color='gray.300'>
									Stars: {repo.stargazers_count}
								</Text>
							)}
						</Box>
					))}
				</ul>
			</CardBody>
		</Card>
	);
};

export default ReposData;
