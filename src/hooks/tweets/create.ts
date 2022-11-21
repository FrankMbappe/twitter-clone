import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useContext, useState } from "react";

type CreateTweetInput = {
  tweet: string;
};

export function useCreateTweet() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { contract } = useContext(AccountContext);

  // function is called only once ==> useCallback
  const createTweet = useCallback(
    async (input: CreateTweetInput) => {
      try {
        setLoading(true);
        // Reset error
        setError("");
        await contract?.createTweet(input.tweet);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        // We are done!
        setLoading(false);
      }
    },
    [contract]
  );

  //

  return { error, loading, createTweet };
}
