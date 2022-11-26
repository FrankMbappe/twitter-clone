import { AccountContext } from "@/components/AccountProvider";
import { useCallback, useContext, useState } from "react";

export function useUpdateTweet() {
  const { contract, userAccount } = useContext(AccountContext);

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
        await contract?.methods
          .updateTweet(id, text)
          .send({ from: userAccount });
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

  return { error, loading, updateTweet };
}
