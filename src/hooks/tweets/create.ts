import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useContext, useState } from "react";

export function useCreateTweet() {
  const { contract, userAccount } = useContext(AccountContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  /**
   * Create a tweet
   * @param text The tweet text
   */
  const createTweet = useCallback(
    async (text: string) => {
      try {
        // Start loading
        setLoading(true);

        // Reset error
        setError("");

        // Create tweet
        await contract?.methods.createTweet(text).send({ from: userAccount });
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

  return { error, loading, createTweet };
}
