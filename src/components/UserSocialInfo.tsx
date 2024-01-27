import { Card, CardBody, Flex, Heading } from '@chakra-ui/react';
import { githubUserType } from '../types/githubUserType';

const UserSocialInfo = ({ data }: { data: githubUserType }) => {
  return(
    <Card mt={5} color='white' bg='gray'>
    <CardBody>
      <Flex direction='column'>
        <Heading size='5px'>Followers: {data?.followers}</Heading>
        <Heading size='5px'>Following: {data?.following}</Heading>
      </Flex>
    </CardBody>
  </Card>
  )
}

export default UserSocialInfo;