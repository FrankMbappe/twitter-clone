import { useCreateTweet, useUpdateTweet } from "@/hooks/tweets";
import useUser from "@/hooks/user";
import Tweet from "@/models/Tweet";
import { METAMASK_LOGO_URL } from "@/utils";
import { Flex, Avatar, Stack, Button } from "@chakra-ui/react";
import { useState, useCallback, useMemo, useContext } from "react";
import { AccountContext } from "./AccountProvider";
import AutoResizeTextarea from "./AutoResizeTextarea";
import ErrorMsg from "./ErrorMsg";

type TweetInputProps = {
  tweet?: Tweet;
  onSubmit?: () => Promise<void>;
};

const TweetInput = ({ tweet, onSubmit }: TweetInputProps) => {
  const [text, setText] = useState(tweet?.text || "");
  const { isUserConnected, userAccount } = useContext(AccountContext);
  const isEditing = useMemo(() => !!tweet, [tweet]);
  const {
    loading: isCreating,
    error: createError,
    createTweet,
  } = useCreateTweet();
  const {
    loading: isUpdating,
    error: updateError,
    updateTweet,
  } = useUpdateTweet();

  const handleTweet = useCallback(async () => {
    if (!text.length) return;

    // Create or edit tweet
    if (isEditing) {
      await updateTweet(tweet!.id, { text });
    } else {
      await createTweet({ author: userAccount, text });
    }

    // Call submit callback
    await onSubmit?.();
  }, []);

  return (
    <Flex>
      <Avatar src={METAMASK_LOGO_URL} />
      <Stack flex={1} ml={5} spacing={4}>
        <AutoResizeTextarea
          variant="unstyled"
          fontSize={20}
          placeholder="What's happening?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          alignSelf="flex-end"
          rounded="full"
          variant="solid"
          colorScheme="whatsapp"
          isLoading={isCreating || isUpdating}
          disabled={!isUserConnected}
          onClick={handleTweet}
        >
          {isEditing ? "Save" : "Tweet"}
        </Button>
        {!!(createError || updateError) && <ErrorMsg textOnly />}
      </Stack>
    </Flex>
  );
};

export default TweetInput;
