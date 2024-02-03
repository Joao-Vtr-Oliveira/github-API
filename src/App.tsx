import { Box } from '@chakra-ui/react';
import GitHubCard from './components/GitHubCard';

function App() {
	return (
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			bg='black'
			h='100vh'
		>
			<GitHubCard />
		</Box>
	);
}

export default App;
