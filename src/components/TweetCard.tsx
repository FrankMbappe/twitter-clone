import Tweet from "@/models/Tweet";
import {
  Avatar,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

type TweetCardProps = {
  tweet: Tweet;
};
const TweetCard = ({ tweet }: TweetCardProps) => {
  return (
    <Flex p={3}>
      <Avatar src="https://s2.coinmarketcap.com/static/img/coins/200x200/1321.png" />

      <Stack flex={1} ml={3}>
        <Stack direction="row">
          <Text fontWeight="bold">{tweet.author}</Text>
          <Text color="gray">{"@guest"}</Text>
          <Text color="gray">{new Date(tweet.createdAt).toISOString()}</Text>
        </Stack>
        <Text>{tweet.text}</Text>
        <ButtonGroup variant="solid" size="sm">
          <IconButton icon={<Icon as={PencilSquareIcon} />} aria-label="edit" />
          <IconButton icon={<Icon as={TrashIcon} />} aria-label="delete" />
        </ButtonGroup>
      </Stack>
    </Flex>
  );
};

export default TweetCard;
