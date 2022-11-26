import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useState, useContext } from "react";

export function useDeleteTweet() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { contract } = useContext(AccountContext);

  const deleteTweet = useCallback(
    async (id: string) => {
      try {
        // Start loading
        setLoading(true);

        // Reset error
        setError("");

        // Delete tweet
        await contract?.deleteTweet(id);
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

  return { error, loading, deleteTweet };
}
