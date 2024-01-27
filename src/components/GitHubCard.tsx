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
import React, { useEffect, useState } from 'react';
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
		const info = await githubUserRequest(user);
		const repoInfo = await githubRepoRequest(user);
		setData(info);
		setRepoData(repoInfo);
	};

	useEffect(() => {
		fetchButton();
	}, []);

	return (
		<Flex
			height='100vh'
			align='center'
			justify='center'
			className='w-screen md:w-4/5'
		>
			<Card className='w-screen md:w-3/5 h-screen'>
				<CardHeader className='flex flex-col items-center justify-center'>
					<Heading>GitHub API</Heading>
				</CardHeader>
				<CardBody className='flex flex-col items-center'>
					<Image
						borderRadius='full'
						boxSize='150px'
						src={
							data?.avatar_url
								? data.avatar_url
								: 'https://avatars.githubusercontent.com/u/9919?s=460&v=4'
						}
					/>
					<Heading className='mb-5 mt-3'>
						{data?.login ? (
							<a
								className='hover:underline hover:text-blue-400'
								target='_blank'
								href={data.html_url}
							>
								{data.login}
							</a>
						) : (
							'Nome'
						)}
					</Heading>
					<Text>{data?.bio ? data.bio : ''}</Text>

					{data && <UserDataList data={data} />}
					{data && <UserSocialInfo data={data} />}

					{repoData && <ReposData repoData={repoData} />}
					<Heading size='10px' mt={5}>
						{data?.created_at && (
							<>
								Account created at: <DateConverter date={data.created_at} />
							</>
						)}
					</Heading>
				</CardBody>
				<CardFooter justify='center' className='flex'>
					<Input
						w='50%'
						mr={5}
						placeholder='Username'
						value={user}
						onChange={handleChange}
					/>
					<Button onClick={fetchButton}>Search</Button>
				</CardFooter>
			</Card>
		</Flex>
	);
};

export default GitHubCard;