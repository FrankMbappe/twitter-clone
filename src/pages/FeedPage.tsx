import TweetCard from "@/components/TweetCard";
import Tweet from "@/models/Tweet";
import {
  Stack,
  Divider,
  Flex,
  Heading,
  Avatar,
  Input,
  Button,
} from "@chakra-ui/react";

const METAMASK_LOGO_URL =
  "https://miro.medium.com/max/555/1*FjSkfan-Kh3vrgtlW8UP_g.png";

const tweets: Tweet[] = [
  {
    id: "C67A47E3-1815-1E0B-E519-1685D7C56859",
    author: "Berk Mcbride",
    createdAt: "2022-03-27 06:53:58",
    text: "eleifend vitae, erat. Vivamus nisi.",
  },
  {
    id: "3D216E61-4BB1-9727-C211-6179CD5B2901",
    author: "Paki Mccormick",
    createdAt: "2023-02-07 17:50:20",
    text: "sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac",
  },
  {
    id: "731D3BE9-3D4B-EB39-ECCE-675D7AC1B1AF",
    author: "Gil Johnston",
    createdAt: "2023-09-04 01:39:34",
    text: "mauris eu elit. Nulla",
  },
  {
    id: "4E3BD96D-B5A3-296B-E3BB-3C77E28F4595",
    author: "Chastity Leblanc",
    createdAt: "2023-09-25 03:37:01",
    text: "eget massa. Suspendisse",
  },
  {
    id: "B2534C58-5317-C62C-8A75-8C956F4BDB44",
    author: "Meredith Roth",
    createdAt: "2021-12-05 12:18:21",
    text: "ipsum dolor sit",
  },
];

const FeedPage = () => {
  return (
    <Stack spacing={4} divider={<Divider />}>
      <Flex direction="column" p={3}>
        <Heading size="lg">Home</Heading>
        <Flex mt={5}>
          <Avatar src={METAMASK_LOGO_URL} />
          <Stack flex={1} ml={5} spacing={4} divider={<Divider />}>
            <Input
              variant="unstyled"
              fontSize={20}
              placeholder="What's happening?"
            />
            <Button
              alignSelf="flex-end"
              rounded="full"
              variant="solid"
              colorScheme="whatsapp"
            >
              Tweet
            </Button>
          </Stack>
        </Flex>
      </Flex>

      <Stack divider={<Divider />}>
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </Stack>
    </Stack>
  );
};
export default FeedPage;
