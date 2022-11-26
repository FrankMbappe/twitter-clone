import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useContext, useState } from "react";

export function useUpdateTweet() {
  const { contract } = useContext(AccountContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateTweet = useCallback(
    async (id: string, text: string) => {
      // Update tweet
      try {
        // Start loading
        setLoading(true);

        // Reset error
        setError("");

        // Update tweet
        await contract?.updateTweet(id, text);
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

  return { error, loading, updateTweet };
}
