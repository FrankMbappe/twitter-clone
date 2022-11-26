import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useContext, useState } from "react";

export function useCreateTweet() {
  const { contract } = useContext(AccountContext);

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
        await contract?.createTweet(text);
      } catch (error) {
        // Set error
        setError((error as Error).message);
      } finally {
        // We are done!
        setLoading(false);
      }
    },
    [contract]
  );

  return { error, loading, createTweet };
}
