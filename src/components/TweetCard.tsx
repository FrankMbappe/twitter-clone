import { useDeleteTweet } from "@/hooks/tweets";
import Tweet from "@/models/Tweet";
import { DEFAULT_USER_PIC } from "@/utils";
import {
  Avatar,
  Box,
  ButtonGroup,
  Flex,
  Icon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useMemo } from "react";
import TweetInput from "./TweetInput";

type TweetCardProps = {
  tweet: Tweet;
  onUpdate?: () => Promise<void>;
};
type TweetEditModalProps = {
  tweet: Tweet;
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => Promise<void>;
};

const TweetCard = ({ tweet, onUpdate }: TweetCardProps) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { loading: isDeleting, deleteTweet } = useDeleteTweet();
  const time = useMemo(
    () =>
      formatDistanceToNow(new Date(tweet.timestamp), {
        addSuffix: true,
      }),
    [tweet.timestamp]
  );

  return (
    <>
      <Flex p={3}>
        <Avatar src={DEFAULT_USER_PIC} />

        <Stack flex={1} ml={3} spacing={3}>
          <Stack
            direction="row"
            align="center"
            divider={<Box boxSize={1} rounded="full" bg="gray" />}
          >
            <Text fontWeight="bold">{tweet.author}</Text>
            <Text color="gray">{"@guest"}</Text>
            <Text color="gray">{time}</Text>
          </Stack>

          <Text fontSize={18}>{tweet.tweet}</Text>

          <ButtonGroup isAttached variant="solid">
            <IconButton
              icon={<Icon as={PencilSquareIcon} />}
              aria-label="edit"
              onClick={onOpen}
            />
            <IconButton
              icon={<Icon as={TrashIcon} />}
              aria-label="delete"
              isLoading={isDeleting}
              onClick={async () => {
                await deleteTweet(tweet.id);
              }}
            />
          </ButtonGroup>
        </Stack>
      </Flex>

      <TweetEditModal
        tweet={tweet}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onUpdate}
      />
    </>
  );
};

const TweetEditModal = ({
  tweet,
  isOpen,
  onClose,
  onSubmit,
}: TweetEditModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{"Edit tweet"}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <TweetInput tweet={tweet} onSubmit={onSubmit} />
        </ModalBody>
      </ModalContent>
      <ModalFooter />
    </Modal>
  );
};

export const TweetCardSkeleton = () => (
  <Flex p={3}>
    <SkeletonCircle boxSize="48px" />

    <Stack flex={1} ml={3} spacing={3}>
      <Skeleton h="24px" w="100px" />
      <SkeletonText />
      <Skeleton h="40px" w="80px" />
    </Stack>
  </Flex>
);

export default TweetCard;
