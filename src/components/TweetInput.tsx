import React, { useState, useCallback, useMemo, useContext } from "react";
import { Flex, Avatar, Stack, Button } from "@chakra-ui/react";

import { AccountContext } from "./AccountProvider";
import AutoResizeTextarea from "./AutoResizeTextarea";
import ErrorMsg from "./ErrorMsg";
import { METAMASK_LOGO_URL } from "@/config";
import type Tweet from "@/models/Tweet";
import { useCreateTweet, useUpdateTweet } from "@/hooks/tweets";

type TweetInputProps = {
  tweet?: Tweet;
  onSubmit?: () => Promise<void>;
};

const TweetInput = ({ tweet, onSubmit }: TweetInputProps) => {
  const [text, setText] = useState(tweet?.tweet || "");
  const { isUserConnected } = useContext(AccountContext);
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
      if (tweet) await updateTweet(tweet.id, text);
    } else {
      await createTweet({ tweet: text });
    }

    // Call submit callback
    await onSubmit?.();
    setText("");
  }, [text, isEditing, onSubmit, tweet, updateTweet, createTweet]);

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

        {/* Display error message only if there's a create/update error. */}
        {!!(createError || updateError) && <ErrorMsg textOnly />}
      </Stack>
    </Flex>
  );
};

export default TweetInput;
