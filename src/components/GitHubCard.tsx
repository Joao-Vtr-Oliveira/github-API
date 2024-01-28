// GitHubCard.jsx

import React, { useEffect, useState } from 'react';
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	Image,
	Input,
	Text,
} from '@chakra-ui/react';
import {
	githubRepoRequest,
	githubUserRequest,
} from '../requests/githutRequest';
import { githubUserType } from '../types/githubUserType';
import DateConverter from '../requests/DateConverter';
import { githubRepoType } from '../types/githubRepoType';
import UserDataList from './UserDataList';
import ReposData from './ReposData';
import UserSocialInfo from './UserSocialInfo';

const GitHubCard = () => {
	const [user, setUser] = useState('joao-vtr-oliveira');
	const [data, setData] = useState<githubUserType | null>();
	const [repoData, setRepoData] = useState<githubRepoType[] | null>();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser(e.target.value);
	};

	const fetchButton = async () => {
		try {
			const info = await githubUserRequest(user);
			const repoInfo = await githubRepoRequest(user);
			setData(info);
			setRepoData(repoInfo);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	useEffect(() => {
		fetchButton();
	}, []);

	return (
		<Flex minH='100vh' align='center' justify='center'>
			<Card className='w-full max-w-2xl h-full overflow-auto'>
				<CardHeader className='flex items-center justify-center'>
					<Heading as='h1' size='xl'>
						GitHub API
					</Heading>
				</CardHeader>
				<CardBody className='flex flex-col items-center p-4'>
					<Image
						borderRadius='full'
						boxSize='150px'
						src={
							data?.avatar_url
								? data.avatar_url
								: 'https://avatars.githubusercontent.com/u/9919?s=460&v=4'
						}
						alt='User Avatar'
					/>
					<Heading as='h2' size='lg' mt={3} mb={2}>
						{data?.login ? (
							<a
								href={data.html_url}
								target='_blank'
								rel='noopener noreferrer'
								className='hover:underline hover:text-blue-400'
							>
								{data.login}
							</a>
						) : (
							'Nome'
						)}
					</Heading>
					<Text textAlign='center' mb={4}>
						{data?.bio || 'No bio available.'}
					</Text>

					{data && <UserDataList data={data} />}
					{data && <UserSocialInfo data={data} />}

					{repoData && <ReposData repoData={repoData} />}
					<Text fontSize='sm' mt={5}>
						{data?.created_at && (
							<>
								Account created at: <DateConverter date={data.created_at} />
							</>
						)}
					</Text>
				</CardBody>
				<CardFooter justify='center' className='flex p-4'>
					<Input
						flex='1'
						mb={{ base: 2, sm: 0 }}
						mr={{ base: 0, sm: 2 }}
						placeholder='Username'
						value={user}
						onChange={handleChange}
					/>
					<Button onClick={fetchButton} colorScheme='teal'>
						Search
					</Button>
				</CardFooter>
			</Card>
		</Flex>
	);
};

export default GitHubCard;
