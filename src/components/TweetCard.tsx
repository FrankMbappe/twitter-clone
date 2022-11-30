import { useDeleteTweet, useLikeOrDislikeTweet } from "@/hooks/tweets";
import type Tweet from "@/models/Tweet";
import { DEFAULT_USER_PIC } from "@/config";
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
import { useContext, useMemo } from "react";
import TweetInput from "./TweetInput";
import { truncate } from "@/utils";
import { AccountContext } from "./AccountProvider";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

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
  const { userAccount } = useContext(AccountContext);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { loading: isDeleting, deleteTweet } = useDeleteTweet();
  const { loading: isLiking, likeOrDislikeTweet } = useLikeOrDislikeTweet();
  const time = useMemo(
    () =>
      formatDistanceToNow(new Date(tweet.timestamp * 1000) || new Date(), {
        addSuffix: true,
      }),
    [tweet.timestamp]
  );
  const canUpdate = useMemo(
    () => userAccount.toLowerCase() === tweet.author.toLowerCase(),
    [tweet.author, userAccount]
  );
  const hasLiked = useMemo(
    () =>
      !!tweet.likedBy
        ?.map((id) => id.toLowerCase())
        .includes(userAccount.toLowerCase()),
    [tweet.likedBy, userAccount]
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
            <Text fontWeight="bold">{truncate(tweet.author)}</Text>
            <Text color="gray">{time}</Text>
          </Stack>

          <Text fontSize={18}>{tweet.text}</Text>

          <Flex justify="space-between" align="center">
            <Flex align="center">
              <IconButton
                icon={
                  <Icon
                    as={hasLiked ? HeartIconSolid : HeartIcon}
                    color={hasLiked ? "red" : "gray"}
                  />
                }
                aria-label="like-dislike"
                isLoading={isLiking}
                onClick={async () => {
                  await likeOrDislikeTweet(tweet.id);
                }}
              />
              <Text ml={3}>{tweet.likesCount}</Text>
            </Flex>

            {canUpdate && (
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
            )}
          </Flex>
        </Stack>
      </Flex>

      {canUpdate && (
        <TweetEditModal
          tweet={tweet}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={onUpdate}
        />
      )}
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
