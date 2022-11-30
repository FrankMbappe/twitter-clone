import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useState, useContext } from "react";

export function useLikeOrDislikeTweet() {
  const { contract, userAccount } = useContext(AccountContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const likeOrDislikeTweet = useCallback(
    async (id: string) => {
      try {
        // Start loading
        setLoading(true);

        // Reset error
        setError("");

        // Like/Dislike tweet
        await contract?.methods.toggleLikeTweet(id).send({ from: userAccount });
      } catch (error) {
        // Set error
        setError((error as Error).message);
        console.error(error);
      } finally {
        // We are done!
        setLoading(false);
      }
    },
    [contract, userAccount]
  );

  return { error, loading, likeOrDislikeTweet };
}
