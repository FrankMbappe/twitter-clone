import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useState, useContext } from "react";

export function useDeleteTweet() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { contract } = useContext(AccountContext);

  const deleteTweet = useCallback(async (id: string) => {
    // TODO Delete tweet
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
  }, [contract]);

  return { error, loading, deleteTweet };
}
