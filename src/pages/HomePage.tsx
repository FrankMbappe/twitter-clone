import { useListTweets } from "@/hooks/tweets";
import ErrorMsg from "@/components/ErrorMsg";
import TweetCard, { TweetCardSkeleton } from "@/components/TweetCard";
import { range } from "@/utils";
import { Stack, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import TweetInput from "@/components/TweetInput";

const Feed = () => {
  const { loading, error, tweets } = useListTweets();

  return loading ? (
    <Stack divider={<Divider />}>
      {range(5).map((i) => (
        <TweetCardSkeleton key={i} />
      ))}
    </Stack>
  ) : error ? (
    <ErrorMsg />
  ) : tweets.length === 0 ? (
    <Text textAlign="center" py={5} fontSize={18} color="gray">
      {"Nothing to show yet. How about a new tweet 😃?"}
    </Text>
  ) : (
    <Stack divider={<Divider />}>
      {tweets.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} />
      ))}
    </Stack>
  );
};

const HomePage = () => {
  return (
    <Stack spacing={3} pb={10}>
      <Flex direction="column" p={3}>
        <Heading size="lg" mb={5}>
          Home
        </Heading>
        <TweetInput />
      </Flex>
      <Feed />
    </Stack>
  );
};
export default HomePage;
