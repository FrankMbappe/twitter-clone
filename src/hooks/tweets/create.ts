import { useCallback, useState } from "react";

type CreateTweetInput = {
  text: string;
  author: string;
};

export function useCreateTweet() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const createTweet = useCallback(async (input: CreateTweetInput) => {
    // TODO Create tweet
  }, []);

  return { error, loading, createTweet };
}
