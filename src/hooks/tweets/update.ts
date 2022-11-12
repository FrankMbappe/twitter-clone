import Tweet from "@/models/Tweet";
import { useCallback, useState } from "react";

type UpdateTweetInput = {
  text: string;
};

export function useUpdateTweet() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const updateTweet = useCallback(
    async (id: string, update: UpdateTweetInput) => {
      // TODO Update tweet
    },
    []
  );

  return { error, loading, updateTweet };
}
